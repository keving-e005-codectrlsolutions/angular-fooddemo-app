import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'address-details',
    loadChildren: () => import('./pages/address-details/address-details.module').then( m => m.AddressDetailsPageModule)
  },
  {
    path: 'delivery-address',
    loadChildren: () => import('./pages/delivery-address/delivery-address.module').then( m => m.DeliveryAddressPageModule)
  },
  {
    path: 'mhg-rewards',
    loadChildren: () => import('./pages/mhg-rewards/mhg-rewards.module').then( m => m.MHGRewardsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'forgot-email-password',
    loadChildren: () => import('./pages/forgot-email-password/forgot-email-password.module').then( m => m.ForgotEmailPasswordPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'special-offers',
    loadChildren: () => import('./pages/special-offers/special-offers.module').then( m => m.SpecialOffersPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'delivery-pickup-availability',
    loadChildren: () => import('./pages/delivery-pickup-availability/delivery-pickup-availability.module').then( m => m.DeliveryPickupAvailabilityPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
