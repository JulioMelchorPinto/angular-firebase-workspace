import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from '../../pages/login/login.component';
import { SharedModule } from '../../pages/shared/shared.module';
import { MaterialModule } from '../../material-module';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class FullwidthModule { }
