import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  active = 'accueil';

  @Output() selectedPage = new EventEmitter<string>();

  onSelect(page: string) {
    this.active = page;
    this.selectedPage.emit(page);
  }

}
