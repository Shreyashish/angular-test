import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular is Working';
  msg = "This is a message";

  someCustomEvent(event) {
  	console.log("you called a custom event!", event);
  }
}
