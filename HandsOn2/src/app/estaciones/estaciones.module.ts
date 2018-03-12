import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstacionesRoutingModule } from './estaciones-routing.module';
import { EstacionesComponent } from './estaciones.component';

@NgModule({
  imports: [
    CommonModule,
    EstacionesRoutingModule
  ],
  declarations: [EstacionesComponent],
  exports: [EstacionesComponent]
})
export class EstacionesModule { }
