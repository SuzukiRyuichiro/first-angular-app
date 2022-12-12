import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks = [
    {
      name: 'Task 1',
      description: 'Vitae commodo sagittis duis',
      done: false,
    },
    {
      name: 'Task 2',
      description: 'Vitae commodo sagittis duis',
      done: false,
    },
    {
      name: 'Task 3',
      description: 'Vitae commodo sagittis duis',
      done: false,
    },
    {
      name: 'Task 4',
      description: 'Vitae commodo sagittis duis',
      done: false,
    },
  ];
}
