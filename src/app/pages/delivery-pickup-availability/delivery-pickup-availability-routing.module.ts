import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryPickupAvailabilityPage } from './delivery-pickup-availability.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPickupAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryPickupAvailabilityPageRoutingModule {}
