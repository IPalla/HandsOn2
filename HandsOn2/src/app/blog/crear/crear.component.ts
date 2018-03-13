import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { EntradaBlog } from '../../modelos/entradas';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  @ViewChild('form1') formUser: any; /*Variable local del formulario */
  oInputBlog: EntradaBlog;
  oValidado: Object;
  @Output() outAddBlogItem: EventEmitter<EntradaBlog>;
  constructor() {
    this.outAddBlogItem = new EventEmitter();
  }

  ngOnInit() {
    this.oValidado = {'was-validated': true};
  }

}
