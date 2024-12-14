import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todos } from './interfaces/todos.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todos[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todos[]) {
    this.todosSubject$.next(todos);
  }

  deleteTodos(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => {
        if (item.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }

  createTodo(todo: any) {
    const existingTodo = this.todosSubject$.value.find(
      (currentTodo) =>
        currentTodo.title.trim().toLowerCase() ===
        todo.title.trim().toLowerCase()
    );

    if (existingTodo) {
      alert('Такая задача уже есть');
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
      alert('Задача успешно добавлена');
    }
  }
}
