import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }


  fetchData() {
  	return this.http.get('https://try-angular-a1703.firebaseio.com/.json').map(
  		(res) => res.json()
  	);
  }
}
