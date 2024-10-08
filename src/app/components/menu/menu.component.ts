import { Component } from '@angular/core';
import{MatTabsModule}from "@angular/material/tabs";
import { CreateTaskComponent } from '../../component/create-task/create-task.component';
import { TaskViewComponent } from '../../component/task-view/task-view.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTabsModule,CreateTaskComponent,TaskViewComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
