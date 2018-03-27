import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activePage = 'accueil';

  onNavigate(page: string) {
    this.activePage = page;
  }

}
