import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { Task } from '../../models/task';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  constructor(public data: DataserviceService,public dialog: MatDialog) {
    
  }

  updateTask: Task = {
    taskname:"",
    description:"",
    responsable:"",
    priority:""
  }

  ngOnInit(): void {  
    this.getAllTask();
    this.getAllUser();
  }

  getAllTask(){
    this.data.getAllTask().subscribe(
      res => {
        this.data.taskArray = res['AllTask']; 
      }
    );
  }

  getAllUser(){
    this.data.getAllUsers().subscribe(
      res => {
        this.data.userArray = res['findedUsers']; 
      }
    );
  }

  addTask(form:NgForm){
    const id = form.value._id;
    if(id){
      const res = confirm("¿Está seguro qué quiere editar la Tarea?");
      if(res){
        this.updateTask.taskname = form.value.taskname;
        this.updateTask.description = form.value.description;
        this.updateTask.responsable = form.value.responsable;
        this.updateTask.priority = form.value.priority;
        this.data.editTask(id,this.updateTask).subscribe(
          res => {
            this.getAllTask();
            form.reset();
          }
        );
        
      }
    }else{
      this.data.createTask(form.value).subscribe(
        res => {
          this.getAllTask();
          form.reset();
        }
      );
    }
  }

  addUser(form:NgForm){
    this.data.createUser(form.value).subscribe(
      res => {
        this.getAllUser();
        form.reset();
      }
    );
  }

  deleteTask(id:string){
    const res = confirm("¿Está seguro?");
    if(res){
      this.data.deleteTask(id).subscribe(
        res => {
          this.getAllTask();
        }
      );
    }
  }

  deleteUser(id:string){
    const res = confirm("¿Está seguro?");
    if(res){
      this.data.deleteUser(id).subscribe(
        res => {
          this.getAllUser();
        }
      );
    }
  }

  editTask(task:Task){
    this.data.newTask = task;

  }

  editUser(user:User){
    
  }

  completeTask(id:string){
    const res = confirm("¿Está seguro que ha terminado la tarea?");
    if(res){
      this.data.completedTask(id,true).subscribe(
        res => {
          this.getAllTask();
        }
      );
    }
  }

  openDialog(id:string){
    const dialogRef = this.dialog.open(ModalComponent,{data:{id:id}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
