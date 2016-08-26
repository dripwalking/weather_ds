import { Component } from '@angular/core';
@Component({
  selector: 'cities-detail',
  template: `
    <h3 class="text-danger">We are sorry. Requested page not found ...</h3>
    <p>
      please try go to <a routerLink="/cities">home page</a>
    </p>


    `
})
export class PageNotFoundComponent {

}
