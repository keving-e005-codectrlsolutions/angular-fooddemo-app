import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialOffersPageRoutingModule } from './special-offers-routing.module';

import { SpecialOffersPage } from './special-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialOffersPageRoutingModule
  ],
  declarations: [SpecialOffersPage]
})
export class SpecialOffersPageModule {}
