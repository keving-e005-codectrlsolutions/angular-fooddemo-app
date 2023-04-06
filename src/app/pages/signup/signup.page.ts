import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupPageForm } from './signup.page.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  signupForm!: SignupPageForm;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  signup(){
    this.router.navigate(['home']);
  }

  private createForm() {
    this.signupForm = new SignupPageForm(this.formBuilder);
  }

}
