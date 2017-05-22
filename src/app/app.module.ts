import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// import { AuthService } from './shared/authService/auth.service';
import { UserService } from './shared/userService/user.service';


import { AppRoutingModule } from './app-routing.module';
// import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SplashComponent } from './splash/splash.component';
import { SpotDetailComponent } from './spot-detail/spot-detail.component';
import { SpotsListComponent } from './spots-list/spots-list.component';
import { SpotsSearchComponent } from './spots-search/spots-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';
import { DevelopersComponent } from './developers/developers.component';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    SplashComponent,
    SigninComponent,
    SpotDetailComponent,
    SpotsListComponent,
    SpotsSearchComponent,
    UserDetailComponent,
    UsersListComponent,
    DevelopersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    // AuthService,
    // ActivatedRoute
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
