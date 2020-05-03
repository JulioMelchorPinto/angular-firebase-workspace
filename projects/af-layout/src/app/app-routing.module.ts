import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: DefaultComponent, 
      children: [
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
      { path: 'home',component: HomeComponent },
      { path: 'about', component: AboutComponent },
      ]
  },
  { path: '', component: FullwidthComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
