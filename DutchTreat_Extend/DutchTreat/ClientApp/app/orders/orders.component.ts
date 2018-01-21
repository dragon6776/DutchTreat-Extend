import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { DataService } from '../shared/dataService';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.components.html',
  styles: []
})
export class OrdersComponent implements OnInit, CanActivate {

  private orders: Order[];

  constructor(private dataService: DataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    debugger;
     if (this.dataService.loginRequired) {
         // not logged in so redirect to login page with the return url
         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
         return false; 
     }

     // logged in so return true
     return true;
  }

  ngOnInit():void {
    debugger;
    this.dataService.loadOrders().subscribe(success => {
        if (success) {
            this.orders = this.dataService.orders;
        }
    });
  }
}
