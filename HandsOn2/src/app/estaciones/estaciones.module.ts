import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstacionesRoutingModule } from './estaciones-routing.module';
import { EstacionesComponent } from './estaciones.component';
import { EstacionEstandarComponent } from './estacion-estandar/estacion-estandar.component';

@NgModule({
  imports: [
    CommonModule,
    EstacionesRoutingModule
  ],
  declarations: [EstacionesComponent, EstacionEstandarComponent],
  exports: [EstacionesComponent]
})
export class EstacionesModule { }
