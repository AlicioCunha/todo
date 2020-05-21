import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root', // isso aqui irá virar uma tag html <app-root> se procurar está sendo chamado dentro do index
  templateUrl: './app.component.html',
  template: '<p> aqui pode ser colocado html, mas o ideal é fazer com templateUrl como acima</p>',
  styleUrls: ['./app.component.css'] // aqui pode ser ser incluido varios css que esse componente tem
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
  }

  // para remover um item é necessario fazer um splice
  // entao vamos receber o indice do item de todo
  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      // verifica se o todo esta na lista, se for !== -1 está na lista, ai pode remover
      this.todos.splice(index, 1);//pega o item que vai ser removido e diz quantos item precisa remover
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

  add() {

    //pode ser feito para ter uma json
    //            this.form.value => {title : 'Titulo'}
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.clear();

  }

  clear() {
    this.form.reset();
  }
}
