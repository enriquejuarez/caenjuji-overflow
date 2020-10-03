import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
    selector: 'app-singin-screen',
    templateUrl: 'signin-screen.component.html'
})
export class SigninScreenComponent implements OnInit{
    signinForm: FormGroup;
    ngOnInit(){
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        console.log('test');
        if(this.signinForm.valid){
            const {email, password} = this.signinForm.value;
            const user = new User(email, password);
            console.log(user);
            console.log('test');
        }
    }
}