import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { GalleryComponent } from './private/gallery/gallery.component';
import { CrudComponent } from './private/crud/crud.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { LoginComponent } from './public/login/login.component';
import { AboutComponent } from './public/about/about.component';
import { ProfileComponent } from './private/profile/profile.component';
import { AuthPublicGuard } from './service/auth-public.guard';
import { AuthPrivateGuard } from './service/auth-private.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthPublicGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthPublicGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthPublicGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthPrivateGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthPrivateGuard] },
  { path: 'crud', component: CrudComponent, canActivate: [AuthPrivateGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthPrivateGuard] },
  { path: '**', component: HomeComponent, canActivate: [AuthPublicGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
