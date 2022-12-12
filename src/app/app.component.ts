import { Component } from '@angular/core';
import { Task, loadTasks } from './task/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-angular-app';

  tasks: Task[] = [];

  ngOnInit() {
    this.tasks = loadTasks();
  }
}
