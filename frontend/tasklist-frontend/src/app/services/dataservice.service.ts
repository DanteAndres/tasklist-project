import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  server: string = "https://tasklib2020.herokuapp.com";
  taskArray = new Array<Task>();
  userArray = new Array<User>();
  newTask: Task = {
    taskname:"",
    description:"",
    responsable:"",
    priority:"",
    tags: null,
    complete:true
  };
  newUser: User = {
    username:"",
    name:"",
    age:""
  };

  constructor(private http:HttpClient) { }

  getAllTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.server+'/all_task');
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.server+'/all_users');
  }

  createTask(task: Task){
    return this.http.post(this.server+'/create_task', task);
  }

  createUser(user:User){
    return this.http.post(this.server+'/create_user', user);
  }
  deleteTask(id:string){
    return this.http.delete(this.server+'/deleted_task/'+id);
  }
  deleteUser(id:string){
    return this.http.delete(this.server+'/delete_user/'+id);
  }
  completedTask(id:string, complete:boolean){
    return this.http.put(this.server+'/completed_task/'+id,complete);
  }
  editTask(id:string,task:Task){
    return this.http.put(this.server+'/update_task/'+id,task);
  }
  showTaskByUser(id:string){
    return this.http.get(this.server+'/all_Task_by_user/'+id);
  }
}
