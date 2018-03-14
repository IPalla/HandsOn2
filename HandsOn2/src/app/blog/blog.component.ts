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
              <div class="row">
                <h1 class="col-md-6"> Entradas de Blog </h1>
                <form class="form-inline col-md-6" action="/action_page.php">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-success" type="submit">Search</button>
                </form>
              </div>
           </div>
          <div class="card-body">
          <ul>
            <li *ngFor="let item of aEntradas; index as i;">
              <app-lista [oEntrada]="item"></app-lista>
            </li>
          </ul>
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
      response => this.aEntradas = response
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
}

