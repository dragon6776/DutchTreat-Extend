import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { DataService } from '../shared/dataService';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.components.html',
  styles: []
})
export class OrdersComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  private orders: Array<Order> = new Array<Order>();

  // loadOrders(): void{
  //   this.orders = this.dataService.getOrders();
  // }
}
