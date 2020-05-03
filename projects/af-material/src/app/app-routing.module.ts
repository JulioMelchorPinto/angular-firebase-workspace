import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { AddressComponent } from './pages/address/address.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/shared/not-found/not-found.component';




const routes: Routes = [
    { path: '', component: SidenavComponent, children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'address', component: AddressComponent }
    ]},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
