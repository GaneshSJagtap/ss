import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


export const layoutroutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'facility',
        loadChildren: () => import('./modules/faclity/facility.module').then(m => m.FacilityModule)
      },
      {
        path: 'user-setup',
        loadChildren: () => import('./modules/user-setup/user-setup.module').then(m => m.UserSetupModule)
      }
    ]

  }
];

