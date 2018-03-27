import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() selectedPage = new EventEmitter<string>();
  active = '';
  fields = [];

  constructor() {
    this.fields = window.location.href.split('/#/');
    this.active = this.fields[1];
    console.log(this.active);
  }

  onSelect(page: string) {
    this.active = page;
    this.selectedPage.emit(page);
  }

}
