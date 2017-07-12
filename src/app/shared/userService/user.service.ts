import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { IUser } from '../user.model';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser(id: number) {
    console.log(id);
    const userDetailUrl = `${environment.apiBaseUrl}/users/${id}`;
    // const userDetailUrl = `http://localhost:3000/users/${id}`;
    console.log(userDetailUrl);
    return this.http.get(userDetailUrl).map(response => {
      return response.json().data[0].attributes;
    });
  }
}
