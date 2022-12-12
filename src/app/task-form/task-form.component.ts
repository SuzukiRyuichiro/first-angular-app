import { Component } from '@angular/core';
import { Task, saveTask } from '../task/tasks';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';

  addTask(event: any) {
    event.preventDefault();

    const newTask: Task = {
      title: this.title,
      description: this.description,
      done: false,
    };

    saveTask(newTask);
    event.target.reset();
  }
}
