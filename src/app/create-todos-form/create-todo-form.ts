import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.html',
  styleUrl: './create-todo-form.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class createTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  isTitleFocused: boolean = false;

  public formTodo = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  public submitFormTodo() {
    this.createTodo.emit(this.formTodo.value);
  }
}
