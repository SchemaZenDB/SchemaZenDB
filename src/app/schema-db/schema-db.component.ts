import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-schema-db',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './schema-db.component.html',
  styleUrl: './schema-db.component.scss'
})
export class SchemaDbComponent {

}
