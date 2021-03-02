import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Vista médico', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Vista usuário', url: '/user', icon: 'person-circle' },
  ];
  constructor() {}
}
