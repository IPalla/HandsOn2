import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../servicios/blog.service';
import { EntradaBlog } from '../modelos/entradas';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {

  aEntradas: Array<EntradaBlog>;
  sContacto: string;
  sFiltrar: string; /*Valor del search*/
  claseError: string;

  constructor(public blogservice: BlogService) { }

  ngOnInit() {
    this.sFiltrar = '';
    this.aEntradas = [];
    this.blogservice.getEntradas().then(
      response => {
        this.aEntradas = response;
      }
    );
  }
  // respuesta a los eventos en el componente altas
  addEntrada(oInputBlog) {
    this.blogservice.setEntrada(oInputBlog)
      .then(
        () => {
          this.blogservice.getEntradas()
          .then(response => this.aEntradas = response);
        });
  }

  isEmpty () {
    if (this.sFiltrar.length) {
      console.log(this.count);
      this.hola();
      return false;
    }
  }

  hola() {
    if !(!document.getElementById('entradas')) {
      this.claseError = '';
    }

    else{
      this.claseError = 'oculto';
    }
  }
}

