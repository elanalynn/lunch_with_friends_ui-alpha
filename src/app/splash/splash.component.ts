import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../shared/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  title = 'Lench!';
  subtitle = 'A Lunch App for Lenny';
  // authEndpoint = `${environment.apiBaseUrl}/auth/google`;
  authEndpoint = `http://localhost:3000/auth/google`;

  constructor() { }

  ngOnInit() {
  }

}
