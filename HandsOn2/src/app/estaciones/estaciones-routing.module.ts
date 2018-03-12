import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstacionesComponent } from './estaciones.component';

const routes: Routes = [
  {path: '', component: EstacionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstacionesRoutingModule { }
