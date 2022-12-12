export interface Task {
  title: string;
  description: string;
  done: boolean;
}

export function saveTask(task: Task) {
  const tasks = loadTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks(): Task[] {
  const json = localStorage.getItem('tasks');
  if (json) {
    return JSON.parse(json);
  }
  return [];
}
