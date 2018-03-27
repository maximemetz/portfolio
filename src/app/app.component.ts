import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activePage = 'accueil';
  fields = [];

  constructor() {
    this.fields = window.location.href.split('/#/');
    this.activePage = this.fields[1];
    console.log(this.activePage);
  }

  onNavigate(page: string) {
    console.log('In onNavigate');
    this.activePage = page;
  }

}
