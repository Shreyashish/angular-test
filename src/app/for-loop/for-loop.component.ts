import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  blogList: any[];

  constructor() {
  	this.blogList = [
		{
			title: 'PlayPaaji',
			content: 'He likes Disha Patani and Diljit Dosanjh',
			rank: '1'
		},
		{
			title: 'Mudit Bhardwaj',
			content: 'is a prick'
		},
		{
			title: 'Nishank Dawar',
			content: 'Apple lover',
			rank: 'last'
		},
		{
			title: 'Prince Ambawata',
			content: 'asks for Uncharted and her phone number'
		}
	];
	console.log(this.blogList);
  }

  ngOnInit() {
  }

}
