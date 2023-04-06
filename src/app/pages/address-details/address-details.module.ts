import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressDetailsPageRoutingModule } from './address-details-routing.module';

import { AddressDetailsPage } from './address-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddressDetailsPage]
})
export class AddressDetailsPageModule {}
