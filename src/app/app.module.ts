import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { VeillejComponent } from './veillej/veillej.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,
    VeillejComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
