import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, HeaderComponent, FooterComponent, AsideComponent],
  exports: [MenuComponent]
})
export class CoreModule { }
