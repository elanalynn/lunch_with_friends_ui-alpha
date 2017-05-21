import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  title = 'Lench!';
  subtitle = 'A Lunch App for Lenny';

  constructor() { }

  ngOnInit() {
  }

}
