import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  title = 'Lench';
  subtitle = 'Stop worrying about what we\'re having for lunch.';

  constructor() { }

  ngOnInit() {
  }

}
