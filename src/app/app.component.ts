import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // isso aqui irá virar uma tag html <app-root> se procurar está sendo chamado dentro do index
  templateUrl: './app.component.html',
  template : '<p> aqui pode ser colocado html, mas o ideal é fazer com templateUrl como acima</p>',
  styleUrls: ['./app.component.css'] // aqui pode ser ser incluido varios css que esse componente tem
})
export class AppComponent {
  public todos : any[] = [];
  public title : String = 'Minhas tarefas';

  constructor() {
    
    this.todos.push('passear com cachorro');
    this.todos.push('ir ao super mercado');
    this.todos.push('cortar cabelo');
    
  }

  alterarTexto(){
    this.title = 'Texto alterado'
  }
}
