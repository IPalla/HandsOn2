import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../../servicios/blog.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() oEntrada: any;
  @Input() admin: string;
  shown: boolean;
  content: string;
  arrowClass: string;
  title: string;
  author: string;
  constructor(public blog_servicio: BlogService) { }

  ngOnInit() {
    this.shown = false;
    this.content = '';
    this.arrowClass = 'fa fa-sort-down';
    this.title = this.oEntrada.titulo;
    this.author = this.oEntrada.nombre;
  }
  setContent() {
    this.shown = !this.shown;
    (this.shown) ? this.content = this.oEntrada.descripcion : this.content = '';
    (this.shown) ? this.arrowClass = 'fa fa-sort-up' : this.arrowClass = 'fa fa-sort-down';

  }
  fadeContent() {
  }
  deleteEntrada(oEntrada) {

  }
}
