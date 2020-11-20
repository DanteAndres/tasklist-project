import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from '../../services/dataservice.service';
import { Task } from '../../models/task';

export interface DialogData{
  id:string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  username:string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    public service: DataserviceService) { }

  ngOnInit(): void {
    this.getTaskByUser(this.data.id);
  }

  getTaskByUser(id:string){
    this.service.showTaskByUser(id).subscribe(res => {
      this.service.taskArray = res['allTaskByUser']; 
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
