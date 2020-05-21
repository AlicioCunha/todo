import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.loadData();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.saveData();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.saveData();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.saveData();
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.saveData();
    this.clear();

  }

  clear() {
    this.form.reset();
  }

  saveData(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  loadData(){
    const data = localStorage.getItem('todos');
    this.todos = JSON.parse(data);
  }
}
