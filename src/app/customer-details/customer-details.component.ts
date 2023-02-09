import { Component } from '@angular/core';
import { customerData } from '../customerData';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {
  customerData = customerData; //| any;
  customer: any;
  //customerData=customerData!undifind;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const custoemrIdFromRoute = Number(routeParams.get('custoemrId'));

    // Find the product that correspond with the id provided in route.
    this.customer = customerData.find(
      (customerData) => customerData.customerId === custoemrIdFromRoute
    );
  }
}
