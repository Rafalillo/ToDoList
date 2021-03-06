import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styles: [`
        .error{
            background: #ff4081;
        }
    `]
})
export class RegisterComponent {

    form: any;

    constructor(private fb: FormBuilder){
        this.form = fb.group({
            nombre: ['', Validators.required],
            apellidos: ['', Validators.required],
            email: ['', [Validators.required, validEmail()]],
            password: ['', Validators.required],
            cpassword: ['', Validators.required]
        }, {validator: isntSame('password', 'cpassword')});
    }
    onSubmit(){
        console.log(this.form.value)
    }
    isValid(control){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}

function isntSame(field1, field2){
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value){
            return { isntSame: true}
        }
    }
}

function validEmail(){
    return control =>{
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(control.value) ? null : {invalidEmail: true}
}
    
}