import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstacionesComponent } from './estaciones.component';
import { LaPinillaComponent } from './la-pinilla/la-pinilla.component';
import { ValdesquiComponent } from './valdesqui/valdesqui.component';
import { SierraBejarComponent } from './sierra-bejar/sierra-bejar.component';
import { PuertoNavacerradaComponent } from './puerto-navacerrada/puerto-navacerrada.component';

const routes: Routes = [
  {path: '', component: EstacionesComponent },
  {path: 'valdesqui', component: ValdesquiComponent },
  {path: 'la-pinilla', component: LaPinillaComponent },
  {path: 'sierra-bejar', component: SierraBejarComponent },
  {path: 'puerto-navacerrada', component: PuertoNavacerradaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstacionesRoutingModule { }
