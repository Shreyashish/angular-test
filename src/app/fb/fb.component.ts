import { Component, OnInit } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css']
})
export class FbComponent implements OnInit {
  students: any = [];

  constructor() { }

  ngOnInit() {
  	this.fbGetData();
  }

  fbGetData() {
  	firebase.database().ref('/').on('child_added',
  		(snapshot) => {
  			this.students.push(snapshot.val());
  		}
  	);
  }

  fbPostData(name, college, image) {
  	firebase.database().ref('/').push({
  		name: name,
  		college: college,
  		img: image
  	});
  }

}
