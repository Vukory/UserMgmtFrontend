import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { AdminDashboardComponent } from '../pages/admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '**', component: PageNotFoundComponent }

]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
