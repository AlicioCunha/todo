import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // isso aqui irá virar uma tag html <app-root> se procurar está sendo chamado dentro do index
  templateUrl: './app.component.html',
  template : '<p> aqui pode ser colocado html, mas o ideal é fazer com templateUrl como acima</p>',
  styleUrls: ['./app.component.css'] // aqui pode ser ser incluido varios css que esse componente tem
})
export class AppComponent {
  public todos : any[] = []; // [] vazio
  //public todos : any[];  undefined

  /**
   * chamado quando todo vez que o componente inicia
   */
  constructor() {
    //com o this. tem acesso a tudo que esta dentro da classe.
    this.todos.push('passear com cachorro');
    this.todos.push('ir ao super mercado');
    this.todos.push('cortar cabelo');
    this.todos.push(1999);
    this.todos.push([{message : 'teste'}]);
    this.todos.push(new Date());

    //em objetos do tipo any é possivel colocar qq coisa
    // é o bom que fica possivel adicionar qq coisa, o ruim que fica sem tipo
  }

  /* exemplo para o this
  login(){

  }

  public teste : number = 0;

  */


}
