import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BlogModule } from './blog/blog.module';
import { EstacionesModule } from './estaciones/estaciones.module';

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
<<<<<<< HEAD
    EstacionesModule,
=======
    EstacionesModule
>>>>>>> 02d16b2fd8671aacd029b9ec60f2bf966127d1fa
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
