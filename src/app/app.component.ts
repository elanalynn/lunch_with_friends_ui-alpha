import { Component, OnChanges } from '@angular/core';
import { IUser } from './shared/user.model';
import { UserService } from './shared/userService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

  user: IUser;

  constructor(private userSvc: UserService) { }

  ngOnChanges(){
    this.userSvc.getUser(2352352)
      .subscribe(user => {
        this.user = <IUser>user;
      });
  }
}

