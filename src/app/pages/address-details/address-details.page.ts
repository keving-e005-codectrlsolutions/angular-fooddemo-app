import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.page.html',
  styleUrls: ['./address-details.page.scss'],
})
export class AddressDetailsPage{
  isSubmitted = false;
  addressForm!: FormGroup;
  

  constructor(private alertController: AlertController, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit(){
    this.addressForm = this.formBuilder.group ({
      streetNAme: new FormControl('', [Validators.required]),
      suite: new FormControl('', [Validators.required]),
      gateCode: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Custom Location Name',
      buttons: ['OK'],
      inputs: [
        {
          type: 'textarea',
          placeholder: 'Location Name'
        },
      ],
    });

    await alert.present();
  }

  get errorControl() {
    return this.addressForm.controls;
  }

  submitForm() {

    this.isSubmitted =true;
    if (!this.addressForm.valid) {
      console.log('Please provide all the required values!')
    } 
    else {
      console.log(this.addressForm.value)
    }

    this.router.navigate(['delivery-address']);
  }

}
