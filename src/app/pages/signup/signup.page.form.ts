import { FormBuilder, FormGroup, Validators, ValidatorFn } from "@angular/forms";

export class SignupPageForm {

    private formBuilder: FormBuilder;
    private form: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }

    private createForm() : FormGroup{
        let form = this.formBuilder.group({
            firstName: ['',[Validators.required]],
            lastName: ['',[Validators.required]],
            phoneNumber: ['',[Validators.required]],
            emailAddress: ['',[Validators.required, Validators.email]],
            password: ['',[Validators.required, Validators.minLength(6)]],
            referralCode: ['',[Validators.required]]
        })

        form.get('repeatPassword')?.setValidators(matchPasswordAndRepeatPassword(form));

        return form;
    }

    getForm(): FormGroup{
        return this.form;
    }
}

function matchPasswordAndRepeatPassword(form: FormGroup) : ValidatorFn {
    const password = form.get('password');
    const repeatPassword = form.get('password');

    const validator = () => {
        return password?.value == repeatPassword?.value ? null : {isntMatching: true}
    };

    return validator;

}