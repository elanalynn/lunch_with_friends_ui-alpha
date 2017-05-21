import { Component, Input, OnInit } from '@angular/core';
// import { AuthService } from '../shared/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // authEndpoint = `${environment.apiBaseUrl}/auth/google`;
  authEndpoint = `http://localhost:3000/auth/google`;
  user = false;

  constructor() { }

  ngOnInit() {
  }

}
