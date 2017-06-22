import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  dummyMail: string;

  constructor() {
  	this.dummyMail = "You've Got Mail!";
  }
}
