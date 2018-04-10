import { Component, OnInit } from '@angular/core';
import { ESTACIONES } from '../../modelos/estaciones.data';
import { Estacion } from '../../modelos/estaciones';
import { Router } from '@angular/router';
import '../../../assets/javascript/geoapp.js';

declare var pintamapa: any;
declare var init: any;

@Component({
  selector: 'app-estacion-estandar',
  templateUrl: './estacion-estandar.component.html',
  styleUrls: ['./estacion-estandar.component.css']
})
export class EstacionEstandarComponent implements OnInit {

  oEstacion: Estacion;
  titulo: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.oEstacion = this.getObject(this.router.url.slice(12));
    window.addEventListener('load', () => {pintamapa(); console.log('pintado');});
    window.addEventListener('click', () => {pintamapa(); console.log('pintado');});
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
