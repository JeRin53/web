import { Component } from '@angular/core';
import{MatTabsModule}from "@angular/material/tabs";
import { CreateTaskComponent } from '../../component/create-task/create-task.component';
import { TaskViewComponent } from '../../component/task-view/task-view.component';
import { ProfileComponent } from "../profile/profile.component";
import { Task } from '../../model/task.model';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTabsModule, CreateTaskComponent, TaskViewComponent, ProfileComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  myTasks: Task[] = [];

  addTask(task:Task){
    this.myTasks.push(task);
  }
}