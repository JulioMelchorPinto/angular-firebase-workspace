import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './account/profile/profile.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';



@NgModule({
  declarations: [ProfileComponent, SigninComponent, SignupComponent, VerifyEmailComponent, ForgotPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class IdentityModule { }
