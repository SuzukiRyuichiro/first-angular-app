export interface Task {
  title: string;
  description: string;
  done: boolean;
}

export const tasks = [
  {
    title: 'Task 1',
    description: 'Description 1',
    done: false,
  },
  {
    title: 'Task 2',
    description: 'Description 2',
    done: false,
  },
  {
    title: 'Task 3',
    description: 'Description 3',
    done: true,
  },
  {
    title: 'Task 4',
    description: 'Description 4',
    done: true,
  },
];
