import { Component } from '@angular/core';
import { Task, tasks } from '../task/tasks';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  addTask(event: any) {
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      description: this.description,
      done: false,
    };

    tasks.unshift(newTask);
    event.target.reset();
  }

  title: string = '';
  description: string = '';
}
