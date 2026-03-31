import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-db-migration',
  standalone: true,
  imports: [],
  templateUrl: './db-migration.component.html',
  styleUrl: './db-migration.component.scss'
})
export class DbMigrationComponent {
  serviceId: any;

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;
  console.log(this.serviceId);
}
}
