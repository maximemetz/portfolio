import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { VeillejComponent } from './veillej/veillej.component';
import { E6Component } from './e6/e6.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,
    VeillejComponent,
    E6Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
