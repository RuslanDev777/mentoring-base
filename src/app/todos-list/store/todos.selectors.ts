import { createSelector } from '@ngrx/store';
import { Todos } from 'src/app/interfaces/todos.interface';

interface TodoState {
  todos: Todos[];
}

interface AppState {
  todos: TodoState;
}

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: TodoState) => state.todos
);
