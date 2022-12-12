import { Component, Input } from '@angular/core';
import { Task } from '../task/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  showForm = false;

  @Input() tasks!: Task[];

  toggleShowForm() {
    this.showForm = !this.showForm;
  }
}
