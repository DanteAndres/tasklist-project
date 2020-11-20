export interface Task{
    _id?:string;
    taskname:string;
    description:string;
    responsable?:string;
    priority:string;
    tags?:Array<string>;
    complete?:boolean;
}