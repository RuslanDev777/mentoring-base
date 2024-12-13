import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TittleTransformPipe } from 'src/app/pipes/tittle-transform.pipe';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [TittleTransformPipe],
})
export class TodoCardComponent {
  @Input()
  todo: any;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
