import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spots-list',
  templateUrl: './spots-list.component.html',
  styleUrls: ['./spots-list.component.scss']
})
export class SpotsListComponent implements OnInit {

  spots = [
    { name: 'Swing Thai'},
    { name: 'Thai Pot' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
