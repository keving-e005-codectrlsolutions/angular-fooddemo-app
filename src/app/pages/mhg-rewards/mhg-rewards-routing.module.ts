import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MHGRewardsPage } from './mhg-rewards.page';

const routes: Routes = [
  {
    path: '',
    component: MHGRewardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MHGRewardsPageRoutingModule {}
