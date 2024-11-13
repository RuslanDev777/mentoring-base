import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);

  todos: Todos[] = [];

  constructor() {
    this.todosApiService
      .getTodos()
      .subscribe((responce: Todos[]) => (this.todos = responce));
  }

  deleteTodos(id: number) {
    this.todos = this.todos.filter((item: Todos) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
