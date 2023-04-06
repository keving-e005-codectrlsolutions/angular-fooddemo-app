import { FormBuilder, FormGroup } from "@angular/forms";
import { SignupPageForm } from "./signup.page.form"

describe('SignupPageForm', () => {

    let signupPageForm: SignupPageForm;
    let form: FormGroup;

    beforeEach(() => {
        signupPageForm = new SignupPageForm(new FormBuilder());
        form = signupPageForm.getForm();
    })
    
    it('should empty firstName be invalid', () => {
        expect(form.get('firstName')?.valid).toBeFalsy();
    })

    it('should empty lastName be invalid', () => {
        expect(form.get('lastName')?.valid).toBeFalsy();
    })

    it('should empty phoneNumber be invalid', () => {
        expect(form.get('phoneNumber')?.valid).toBeFalsy();
    })

    it('should empty emailAddress be invalid', () => {
        expect(form.get('emailAddress')?.valid).toBeFalsy();
    })

    it('should empty password be invalid', () => {
        expect(form.get('password')?.valid).toBeFalsy();
    })

    it('should empty referralCode be invalid', () => {
        expect(form.get('referralCode')?.valid).toBeFalsy();
    })

    it('should invalid email be invalid',() => {
        form.get('email')?.setValue('InvalidEmail');

        expect(form.get('email')?.valid).toBeFalsy();

        it('should password less than 7 characters be invalid', () => {
            form.get('password')?.setValue('12345');

            expect(form.get('password')?.valid).toBeFalsy();
        })

        it('should password different from repeat password be invalid', () => {
            form.get('password')?.setValue('anyPassword');
            form.get('repeatPassword')?.setValue('anotherPassword');
            
            expect(form.get('repeatPassword')?.valid).toBeFalsy();
        })

        it('should form be valid'), () => {
            form.get('firstName')?.setValue("anyName");
            form.get('lastName')?.setValue("anyName");
            form.get('phoneNumber')?.setValue("anyNumber");
            form.get('email')?.setValue("xyz@mail.com");
            form.get('password')?.setValue("anyPassword");
            form.get('referralCode')?.setValue("anyCode");
        }
    })
})