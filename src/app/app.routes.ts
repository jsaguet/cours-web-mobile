import { Route } from '@angular/router';
import { JokesPageComponent } from './jokes-page/jokes-page.component';

export const appRoutes: Route[] = [
  { path: '', component: JokesPageComponent },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./favorites/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
  },
];
