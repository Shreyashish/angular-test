import { Component, OnInit } from '@angular/core';
import { MailService } from  '../mail.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: string = "Prince Ambawata";

  constructor(private mail: MailService) { }

  ngOnInit() {
  }

}
