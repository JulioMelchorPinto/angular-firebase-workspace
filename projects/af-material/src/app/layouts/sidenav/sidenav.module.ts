import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../pages/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material-module';

import { SidenavComponent } from './sidenav.component';
//import { AddItemComponent } from '../../pages/add-item/add-item.component';


@NgModule({
  declarations: [
    SidenavComponent,
//    AddItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ]
})
export class SidenavModule { }
