import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should show error message on field touched and error present', () => {
    component.feild =new FormGroup({anyField: new FormControl()});

    component.feild.markAsTouched();
    component.feild.setErrors({anyerror: true});
    component.error = "anyError"

    expect(component.shouldShowComponent()).toBeTruthy();
  })

  it('should show error message on field not touched', () => {
    component.feild =new FormGroup({anyField: new FormControl()});

    component.feild.setErrors({anyerror: true});
    component.error = "anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it('should hide error message on field touched, but no errors', () => {
    component.feild =new FormGroup({anyField: new FormControl()});

    component.feild.markAsTouched();
    component.error = "anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it('should hide error message on field touched and has error, but it is a different error', () => {
    component.feild =new FormGroup({anyField: new FormControl()});

    component.feild.markAsTouched();
    component.feild.setErrors({anotherError: true});
    component.error = "anotherError"

    expect(component.shouldShowComponent()).toBeTruthy();
  })

});
