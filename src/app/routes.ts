import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplashComponent } from './splash/splash.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

export const APP_ROUTES: Routes = [
    { path: '', component: SplashComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
