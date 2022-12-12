import { Component } from '@angular/core';
import { Task, tasks } from '../task/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  showForm = false;

  tasks: Task[] = tasks;

  toggleShowForm() {
    this.showForm = !this.showForm;
  }
}
