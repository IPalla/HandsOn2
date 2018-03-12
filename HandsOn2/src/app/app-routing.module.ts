import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about/about.component';
import { EstacionesComponent } from './estaciones/estaciones.component';

const routes: Routes = [

  /* { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'estaciones', loadChildren: './estaciones/estaciones.module#EstacionesModule' },
  { path: '', pathMatch: 'full', redirectTo: 'about' }, */
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent },
/*   { path: 'estaciones', loadChildren: './estaciones/estaciones.module#EstacionesModule' }, */
  { path: 'estaciones', component: EstacionesComponent},
  { path: '', pathMatch: 'full', redirectTo: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
