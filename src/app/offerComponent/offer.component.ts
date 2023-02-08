import { Component } from '@angular/core';
import { customerData } from '../customerData';
@Component({
  selector: 'app-offerComponent',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class offerComponent {
  customerData = customerData;
}
