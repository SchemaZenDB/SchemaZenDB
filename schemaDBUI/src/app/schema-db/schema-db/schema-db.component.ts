import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-schema-db',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './schema-db.component.html',
  styleUrl: './schema-db.component.scss'
})
export class SchemaDbComponent {

}
