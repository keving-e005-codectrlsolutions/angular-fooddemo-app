import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MHGRewardsPageRoutingModule } from './mhg-rewards-routing.module';

import { MHGRewardsPage } from './mhg-rewards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MHGRewardsPageRoutingModule
  ],
  declarations: [MHGRewardsPage]
})
export class MHGRewardsPageModule {}
