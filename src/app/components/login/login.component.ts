import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router:Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.router.navigate([''])
      localStorage.setItem('username',this.loginForm.value.username)
    }
    else if(this.loginForm.value.username === 'Admin' && this.loginForm.value.password === 'admin'){
      this.router.navigate(['products-list'])
      localStorage.setItem('username',this.loginForm.value.username)
    }
    else{
      alert('Invalid Credentials')
    }
  }

}
