import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CuerpoComponent } from './Components/cuerpo/cuerpo.component';
import { AppRoutingModule } from './app-routing.module';
import { CuerpoDosComponent } from './Components/cuerpo-dos/cuerpo-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CuerpoComponent,
    CuerpoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
