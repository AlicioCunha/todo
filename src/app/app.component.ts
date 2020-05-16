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
  public form : FormGroup;

  constructor(private fb : FormBuilder) {
      this.form = this.fb.group({
        title : ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required
        ])]
      });



    // pode ser feito passando o objeto como a linha abaixo, mas iremos usar o construtor da classe
    //this.todos.push(new Todo(){id : 2, todo : 'Levar cachorro para passear', done : false});
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', true));
    this.todos.push(new Todo(3, 'Cortar o cabelo', false));

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
}
