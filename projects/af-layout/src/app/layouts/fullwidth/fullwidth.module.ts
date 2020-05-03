import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from '../../pages/login/login.component';
import { SharedModule } from '../../pages/shared/shared.module';

@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class FullwidthModule { }
