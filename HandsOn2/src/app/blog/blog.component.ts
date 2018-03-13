import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../servicios/blog.service';
import { EntradaBlog } from '../modelos/entradas';

@Component({
  selector: 'app-blog',
  template: `
    <div class="container mb-2">
 <div class="row align-items-center main">
     <div class="col text-center">
         <div class="card">
           <div class="card-header">
             <h1> Entradas de Blog </h1>
           </div>
           <div class="card-body">
              <app-lista [aEntradas]="aEntradas"></app-lista>
           </div>
           <div class="card-footer">
              <app-crear (outAddBlogItem)="addEntrada($event)"></app-crear>
           </div>
         </div>
     </div>
 </div>
</div>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  aEntradas: Array<EntradaBlog>;
  sContacto: string;

  constructor(public blogservice: BlogService) { }

  ngOnInit() {
    this.aEntradas = [];
    this.blogservice.getEntradas().then(
       response =>  this.aEntradas = response
     );
  }
  // respuesta a los eventos en el componente altas
  addEntrada (oInputBlog) {
    this.blogservice.setEntrada(oInputBlog)
    .then(
      () => {this.blogservice.getEntradas()
        .then(response =>  this.aEntradas = response);
      });
  }
}

