import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss'
})
export class ConsultingComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
