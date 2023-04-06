import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'

import { AddressDetailsPage } from './address-details.page';
import { Router } from '@angular/router';

describe('AddressDetailsPage', () => {
  let component: AddressDetailsPage;
  let fixture: ComponentFixture<AddressDetailsPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDetailsPage ],
      imports: [
        IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressDetailsPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should create form on init', () => {
    component.ngOnInit();
  
    expect(component.addressForm).not.toBeUndefined();
   })
  
   it('should go to delivery-address page on addressForm', () => {
    spyOn(router, 'navigate');
  
    component.submitForm();
  
    expect(router.navigate).toHaveBeenCalledWith(['deliver-address']);
   })
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
