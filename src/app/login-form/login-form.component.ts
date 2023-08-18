import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";
import {credentials} from "../../types/User";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  loginForm!: FormGroup
  errorMsg: string = ''
  _router = this.router
  constructor(private formBuilder:FormBuilder, private router:Router, private authService:AuthService){}

  ngOnInit() {
    this.loginForm  = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('invalid')
      this.errorMsg = 'Your credentials are invalid.'
      return
    }

    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
        return this.errorMsg = err.error.message
      }
    })

  }
}
