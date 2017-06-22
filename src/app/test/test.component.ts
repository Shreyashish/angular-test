import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MailService } from  '../mail.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() onCustomEvent = new EventEmitter();

  name: string = "Prince Ambawata";

  constructor(private mail: MailService) { }

  ngOnInit() {
  }

  fireCustomEvent(event) {
  	this.onCustomEvent.emit(event);
  }

}
