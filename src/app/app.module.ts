import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MaterialModule,
  MdMenuModule,
  MdSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// import { AuthService } from './shared/auth.service';
import { UserService } from './shared/userService/user.service';


import { AppRoutingModule } from './app-routing.module';
// import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SplashComponent } from './splash/splash.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SplashComponent,
    UsersListComponent,
    UserDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdMenuModule,
    MdSidenavModule
  ],
  providers: [
    // AuthService
    // ActivatedRoute
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
