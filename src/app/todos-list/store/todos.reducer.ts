import { createReducer, on } from '@ngrx/store';
import { Todos } from 'src/app/interfaces/todos.interface';
import { TodosActions } from './todos.actions';

const initialState: { todos: Todos[] } = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodosActions.set, (state, payload) => ({
    ...state,
    todos: payload.todos,
  })),
  on(TodosActions.create, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
  })),
  on(TodosActions.delete, (state, payload) => ({
    ...state,
    todos: state.todos.filter((todo) => {
      if (todo.id === payload.id) {
        return false;
      } else {
        return true;
      }
    }),
  }))
);
