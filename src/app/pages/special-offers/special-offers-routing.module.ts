import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialOffersPage } from './special-offers.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialOffersPageRoutingModule {}
