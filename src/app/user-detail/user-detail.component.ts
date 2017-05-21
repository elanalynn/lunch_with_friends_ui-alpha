import { Component, OnInit } from '@angular/core';
// import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../shared/userService/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  firstName: string;
  lastName: string;

  noGoes = [
    { name: 'Dominoes'}
  ];

  constructor(
    // private route: ActivatedRouteSnapshot,
    private userSvc: UserService
    ) { }

  ngOnInit() {
    this.userSvc.getUser(2352352)
      .subscribe(user => {
        this.firstName =
          user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1);
    });
  }
}
