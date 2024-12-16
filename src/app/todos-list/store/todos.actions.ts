import { createActionGroup, props } from '@ngrx/store';
import { Todos } from 'src/app/interfaces/todos.interface';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    set: props<{ todos: Todos[] }>(),
    delete: props<{ id: number }>(),
    create: props<{ todo: Todos }>(),
  },
});
