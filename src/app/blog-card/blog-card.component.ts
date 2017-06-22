import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  
  @Input() blogKiCopy;

  constructor() { }

  ngOnInit() {
  	console.log("Component initialised");
  }

  ngOnChanges() {
  	console.log("on changes called");
  }

  ngAfterViewInit() {
  	console.log("After view init called");
  }

}
