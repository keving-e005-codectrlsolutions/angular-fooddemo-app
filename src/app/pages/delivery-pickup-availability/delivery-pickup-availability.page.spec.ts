import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliveryPickupAvailabilityPage } from './delivery-pickup-availability.page';
import { Router } from '@angular/router'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('DeliveryPickupAvailabilityPage', () => {
  let component: DeliveryPickupAvailabilityPage;
  let fixture: ComponentFixture<DeliveryPickupAvailabilityPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPickupAvailabilityPage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryPickupAvailabilityPage);
    router =TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should create form on init', () => {
    component.ngOnInit();
  
    expect(component.zipCodeForm).not.toBeUndefined();
   })
  
   it('should go to delivery-address page on zipCodeForm', () => {
    spyOn(router, 'navigate');
  
    component.submitForm();
  
    expect(router.navigate).toHaveBeenCalledWith(['deliver-address']);
   })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
