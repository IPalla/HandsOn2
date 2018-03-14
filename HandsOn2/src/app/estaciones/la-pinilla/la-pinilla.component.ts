import { Component, OnInit } from '@angular/core';
import { ESTACIONES } from '../../modelos/estaciones.data';
import { Estacion } from '../../modelos/estaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-la-pinilla',
  templateUrl: './la-pinilla.component.html',
  styleUrls: ['./la-pinilla.component.css']
})
export class LaPinillaComponent implements OnInit {

  oEstacion: Estacion;
  titulo: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.oEstacion = this.getObject(this.router.url.slice(12));
   }
  getObject(titulo: string) {
    let ret;
    ESTACIONES.forEach( (item) => {
      if (item.url === titulo) {
        ret = item;
      }
    });
    return ret;
  }
}
