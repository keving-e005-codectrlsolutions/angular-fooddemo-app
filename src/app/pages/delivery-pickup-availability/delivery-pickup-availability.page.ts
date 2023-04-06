import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-pickup-availability',
  templateUrl: './delivery-pickup-availability.page.html',
  styleUrls: ['./delivery-pickup-availability.page.scss'],
})


export class DeliveryPickupAvailabilityPage {
  zipCodeForm!: FormGroup;
  isSubmitted = false;

  errors = [
    {type: 'required', message: 'Field can not be empty'},
    {type: 'maxLength', message: 'Field can not have more than 5 numbers'},
  ]
  
  constructor( public formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.zipCodeForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(6)]]
    })
  }

  get errorControl() {
    return this.zipCodeForm.controls;
  }
  
  submitForm() {
    this.isSubmitted = true;
    if (!this.zipCodeForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.zipCodeForm.value)
    }
    
    return

  }

}
