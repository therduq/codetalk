import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboarPage } from './dashboar.page';

const routes: Routes = [
  {
    path: '',
    component: DashboarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboarPageRoutingModule {}
