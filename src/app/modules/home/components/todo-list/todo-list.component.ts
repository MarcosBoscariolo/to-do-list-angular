import { Component, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  deleteAllTask(): void {
    const confirm = window.confirm("Deseja deletar todas as suas tarefas?");
    if (confirm) {
      this.taskList = [];
    }
  }

}
