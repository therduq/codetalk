import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagegeneratorPage } from './imagegenerator.page';

const routes: Routes = [
  {
    path: '',
    component: ImagegeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagegeneratorPageRoutingModule {}
