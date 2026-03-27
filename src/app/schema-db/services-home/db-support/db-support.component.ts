import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-db-support',
  standalone: true,
  imports: [],
  templateUrl: './db-support.component.html',
  styleUrl: './db-support.component.scss'
})
export class DbSupportComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
