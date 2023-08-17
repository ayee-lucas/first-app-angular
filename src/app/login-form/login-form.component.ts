import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  _router = this.router

  constructor(private fb:FormBuilder, private router:Router){
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this._router.navigate(['/dashboard'])
  }

}
