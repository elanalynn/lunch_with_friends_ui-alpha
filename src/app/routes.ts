import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplashComponent } from './splash/splash.component';
import { SpotDetailComponent } from './spot-detail/spot-detail.component';
import { SpotsListComponent } from './spots-list/spots-list.component';
import { SpotsSearchComponent } from './spots-search/spots-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

export const APP_ROUTES: Routes = [
    { path: '', component: SplashComponent },
    { path: 'about', component: AboutComponent },
    { path: 'spots', component: SpotsListComponent },
    { path: 'spots/search', component: SpotsSearchComponent },
    { path: 'spots/:id', component: SpotDetailComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
