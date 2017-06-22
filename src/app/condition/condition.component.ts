import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

	isVisible: boolean;

  constructor() {
  	this.isVisible = true;
   }

  ngOnInit() {
  }

  toggleVisibility(event) {
  	//let a = <HTMLElement>document.getElementById("condition-para");
  	//console.log(a);
  	//a.style.display = "none";
  	this.isVisible = !this.isVisible;
  }

}
