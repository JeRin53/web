import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../model/task.model';



@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatCardModule,MatInputModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  @Output('onAdd') onAdd=new EventEmitter<Task>()

  myTasks: Task[]= [];


   heading:string='';
   description:string ='';

  onButtonClicked(){

    if(this.heading==''){
      alert("empty heading!")
      return;
    }
    const newTask: Task={
    heading: this.heading,
    description: this.description
    }
    this.onAdd.emit(newTask);

    this.heading='';
    this.description='';
    
  }
}