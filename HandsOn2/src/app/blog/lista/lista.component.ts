import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() oEntrada: any;
  shown: boolean;
  content: string;
  arrowClass: string;
  title: string;
  author: string;
  constructor() { }

  ngOnInit() {
    this.shown = false;
    this.content = '';
    this.arrowClass = 'fa fa-sort-down';
    this.title = this.oEntrada.titulo;
    this.author = this.oEntrada.nombre;
    console.log(this.oEntrada);
  }
  setContent() {
    this.shown = !this.shown;
    (this.shown) ? this.content = this.oEntrada.descripcion : this.content = '';
    (this.shown) ? this.arrowClass = 'fa fa-sort-up' : this.arrowClass = 'fa fa-sort-down';

  }
  fadeContent() {
    console.log(this.oEntrada.descripcion);
  }

}
