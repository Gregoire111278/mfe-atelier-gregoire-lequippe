// `shell/src/app/app.routes.ts`
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'header',
        exposedModule: './HeaderComponent',
      }).then(m => m.HeaderComponent),
  },
];
