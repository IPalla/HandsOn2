import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  estado: boolean; // False si el sub-menú está oculto.
  claseUl: string;
  claseBoton: string;

  constructor() { }

  ngOnInit() {
    this.estado = false;
    this.claseUl = ' oculto';
    this.claseBoton = '';
  }
  botonMenu() {
    this.estado = !this.estado;
    if (this.estado) {
      this.claseUl = ' ' ;
      this.claseBoton = ' oculto';
    }
    if (!this.estado) {
      this.claseUl = ' oculto' ;
      this.claseBoton = ' ';
    }
}
}
