import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MailService } from  '../mail.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() onCustomEvent = new EventEmitter();

  name: string = "Prince Ambawata";

  students = [];

  constructor(private mail: MailService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => {
        this.students = data;
        console.log(this.students);
      }
    );
  }

  fireCustomEvent(event) {
  	this.onCustomEvent.emit(event);
  }

}
