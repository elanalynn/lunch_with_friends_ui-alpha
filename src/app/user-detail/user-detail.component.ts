import { Component, OnInit } from '@angular/core';
// import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../shared/userService/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  firstName = 'Elana';
  noGoes = [
    { name: 'blargerlala'}
  ];

  constructor(
    // private route: ActivatedRouteSnapshot,
    private userSvc: UserService
    ) { }

  ngOnInit() {
    this.userSvc.getUser(2352352)
      .subscribe(user => {
        console.log(user);
      });
  }

}
