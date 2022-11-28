import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SigupComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
