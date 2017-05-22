import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users = [
    { firstName: 'Shad', lastName: 'Self' },
    { firstName: 'Viral', lastName: 'Shah'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
