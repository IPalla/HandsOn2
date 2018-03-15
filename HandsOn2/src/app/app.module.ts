import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BlogModule } from './blog/blog.module';
import { EstacionesModule } from './estaciones/estaciones.module';
import { MenuComponent } from './core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    AboutModule,
    BlogModule,
    EstacionesModule,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
