import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';
import { WorkInProgressComponent } from './pages/work-in-progress/work-in-progress.component';
import path from 'path';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: LandingPageComponent,
    children: [
      {
        path: ':title',
        component: WorkInProgressComponent
      }
    ]},
  { path: 'invoices', component: InvoicesPageComponent },
  { path: 'wip', component: WorkInProgressComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
