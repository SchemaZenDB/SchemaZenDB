import { Routes } from '@angular/router';
import { schemaDBRoutes } from './schema-db/schema-db.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'schema-db/home', pathMatch: 'full' },
  {
    path: 'schema-db',
    loadComponent: () =>
      import('./schema-db/schema-db.component')
        .then(m => m.SchemaDbComponent),
    children: schemaDBRoutes
  }
];

