import { Component, OnInit } from '@angular/core';
import { CoffeeService } from "../coffee.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private coffeeService:CoffeeService) { }
  coffees = [
    "Americano", 
    "Flat White", 
    "Cappuccino", 
    "Latte", 
    "Espresso", 
    "Machiato", 
    "Mocha", 
    "Hot Chocolate", 
    "Tea"
   ];

  coffeeOrder = [];
  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };
  
  onSubmit() {}

  ngOnInit(): void {
  }

}
