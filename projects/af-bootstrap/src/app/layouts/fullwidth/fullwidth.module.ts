import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



import { FullwidthComponent } from './fullwidth.component';
import { SharedModule } from '../../areas/pages/shared/shared.module';

@NgModule({
  declarations: [
    FullwidthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class FullwidthModule { }
