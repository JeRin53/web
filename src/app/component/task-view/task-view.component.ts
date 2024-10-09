import { Component, Input } from '@angular/core';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
  @Input('task') task!:Task;
  
}
