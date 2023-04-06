import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPickupAvailabilityPageRoutingModule } from './delivery-pickup-availability-routing.module';

import { DeliveryPickupAvailabilityPage } from './delivery-pickup-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPickupAvailabilityPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DeliveryPickupAvailabilityPage]
})
export class DeliveryPickupAvailabilityPageModule {}
