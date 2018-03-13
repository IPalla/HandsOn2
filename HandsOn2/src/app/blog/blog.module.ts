import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ListaComponent } from './lista/lista.component';
import { CrearComponent } from './crear/crear.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogService } from '../../servicios/blog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule,
    HttpClientModule
  ],
  declarations: [
    BlogComponent,
    ListaComponent,
    CrearComponent,
    DetallesComponent
  ],
  exports: [BlogComponent],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
