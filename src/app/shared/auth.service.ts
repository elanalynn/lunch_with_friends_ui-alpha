import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

    // private authEndpoint = `${environment.apiBaseUrl}/auth/google`;

    constructor(private http: Http) { }

    // signin(): Observable<IUser> {
    //   console.log(this.authEndpoint);
    //     return this.http.get(this.authEndpoint)
    //     .map(user => {
    //       console.log(user);
    //     })
    //     .catch(this.handleError);
    // }

    // private handleError(error: any) {
    //     console.error(error);
    //     return Observable.throw(error);
    // }
}
