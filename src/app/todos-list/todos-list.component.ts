import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../todos.service';
import { createTodoFormComponent } from '../create-todos-form/create-todo-form';
import { Todo, Todos } from '../interfaces/todos.interface';
import { Store } from '@ngrx/store';
import { TodosActions } from './store/todos.actions';
import { selectTodos } from './store/todos.selectors';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, createTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  // readonly todosService = inject(TodosService);
  readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.todosApiService.getTodos().subscribe((responce: Todos[]) => {
      // this.todosService.setTodos(responce);
      this.store.dispatch(TodosActions.set({ todos: responce }));
    });
  }

  deleteTodos(id: number) {
    // this.todosService.deleteTodos(id);
    this.store.dispatch(TodosActions.delete({ id }));
  }

  createTodo(dataFormTodo: Todo) {
    // this.todosService.createTodo({
    //   userId: dataFormTodo.id,
    //   id: new Date().getTime(),
    //   title: dataFormTodo.title,
    //   completed: dataFormTodo.completed,
    // });
    this.store.dispatch(
      TodosActions.create({
        todo: {
          userId: dataFormTodo.id,
          id: new Date().getTime(),
          title: dataFormTodo.title,
          completed: dataFormTodo.completed,
        },
      })
    );
  }
}
