import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../servicios/blog.service';
import { EntradaBlog } from '../modelos/entradas';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  aEntradas: Array<EntradaBlog>;
  sContacto: string;
  sFiltrar: string; /*Valor del search*/
  claseError: string;
  counter: number;
  constructor(public blogservice: BlogService) { }

  ngOnInit() {
    this.sFiltrar = '';
    this.aEntradas = [];
    this.claseError = 'oculto';
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
      this.sinResultados();
      return false;
    }
  }

  sinResultados() {
    console.log(document.getElementById('entradas'));
    if (!document.getElementById('entradas')) {
      this.claseError = '';
    } else {
      this.claseError = 'oculto';
    }
  }
}

