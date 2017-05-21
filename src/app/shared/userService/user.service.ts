import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { IUser } from '../user.model';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUser(id: number) {
    const userDetailUrl = `${environment.apiBaseUrl}/users/${id}`;
    return this.http.get(userDetailUrl);
  }
}
