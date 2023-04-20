import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-home></app-home> -->
    <!-- <app-auth></app-auth> -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'NetflixCloneApp';
}
