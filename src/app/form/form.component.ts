import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() message;
  something: any;
  formKiValue = "Default value";
  
  constructor() { }

  ngOnInit() {
  }

  onClick(event, value) {
  	console.log("event", event);
  	this.something = value;
  	console.log(this.something);
  }

  onClick2() {
  	this.formKiValue = null;
  }

}
