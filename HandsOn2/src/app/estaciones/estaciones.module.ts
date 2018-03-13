import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstacionesRoutingModule } from './estaciones-routing.module';
import { EstacionesComponent } from './estaciones.component';
import { LaPinillaComponent } from './la-pinilla/la-pinilla.component';
import { PuertoNavacerradaComponent } from './puerto-navacerrada/puerto-navacerrada.component';
import { SierraBejarComponent } from './sierra-bejar/sierra-bejar.component';
import { ValdesquiComponent } from './valdesqui/valdesqui.component';

@NgModule({
  imports: [
    CommonModule,
    EstacionesRoutingModule
  ],
  declarations: [EstacionesComponent, LaPinillaComponent, PuertoNavacerradaComponent, SierraBejarComponent, ValdesquiComponent],
  exports: [EstacionesComponent]
})
export class EstacionesModule { }
