import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../servicios/blog.service';
import { EntradaBlog } from '../modelos/entradas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  admin: string;
  aEntradas: Array<EntradaBlog>;
  sContacto: string;
  sFiltrar: string; /*Valor del search*/
  claseError: string;
  constructor(public blogservice: BlogService, private router: Router) { }

  ngOnInit() {
    this.sFiltrar = '';
    this.aEntradas = [];
    this.claseError = 'oculto';
    this.blogservice.getEntradas().then(
      response => {
        this.aEntradas = response;
      }
    );
    (this.router.url.slice(6) === 'admin') ? this.admin = 'admin' : this.admin = 'no-admin';
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

  deleteEntrada(oInputBlog) {
    this.blogservice.deleteEntrada(oInputBlog)
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
    if (!document.getElementById('entradas')) {
      this.claseError = '';
    } else {
      this.claseError = 'oculto';
    }
  }
}

