import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
// import layout components
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
// import identity components
import { SigninComponent } from './areas/identity/admin/signin/signin.component';
import { SignupComponent } from './areas/identity/admin/signup/signup.component';
import { ProfileComponent } from './areas/identity/account/profile/profile.component';
import { ForgotPasswordComponent } from './areas/identity/admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './areas/identity/admin/verify-email/verify-email.component';
// import General Pages
import { HomeComponent } from './areas/pages/home/home.component';
import { AboutComponent } from './areas/pages/about/about.component';
import { PageNotFoundComponent } from './areas/pages/shared/page-not-found/page-not-found.component';

import { AuthGuard } from './shared/guard/auth.guard';



const routes: Routes = [
  { path:  'account', component:  DefaultComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    ]
  },
  { path:  'admin', component:  DefaultComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
      { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard] },
      { path: 'verify-email', component: VerifyEmailComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '', component: FullwidthComponent,
    children: [
      { path: 'signin',component: SigninComponent},
      { path: 'home',component: HomeComponent },
      { path: 'about',component: AboutComponent },

    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
