import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'angular-book';

  onClickMe($event){
    console.log("Clicked", $event);
  }
}
