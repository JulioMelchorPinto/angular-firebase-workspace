import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from "./orders.service";

import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [OrdersComponent, OrderListComponent],
  imports: [
    CommonModule
  ],
  providers: [OrdersService]
})
export class OrdersModule { }
