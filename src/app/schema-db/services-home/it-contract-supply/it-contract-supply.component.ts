import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-it-contract-supply',
  standalone: true,
  imports: [],
  templateUrl: './it-contract-supply.component.html',
  styleUrl: './it-contract-supply.component.scss'
})
export class ItContractSupplyComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
