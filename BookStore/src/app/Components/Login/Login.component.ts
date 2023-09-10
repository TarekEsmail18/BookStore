import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/User.service';
import { User } from 'src/app/ViewModel/User';
import { HeaderComponent } from '../Header/Header.component';
import { HomeComponent } from '../Home/Home.component';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  loginPhoto: string = "assets/images/login-photo.jpg";
  submitted: boolean = false;
  notLogged: boolean = false;
  userData:any;
  errorMessage: string = "";

  loginForm = this.fb.group({
    Email: ['',Validators.required],
    Password: ['',Validators.required]
  });


  constructor(private fb: FormBuilder,private userservice: UserService,private router: Router) {}

  ngOnInit() {
   /* if(localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('/Home');
    }*/
  }


  onSubmit(form: FormGroup)
  {
    if(this.loginForm.valid)
    {
      
      this.userData = {
        Email: form.value.Email,
        Password: form.value.Password
      };
      
      this.userservice.Login(this.userData).subscribe(
        (res: any)=>{
          this.router.navigateByUrl('/Home').then(()=>{window.location.reload()});
          localStorage.setItem('token',res.token);
          this.userservice.Roles = res.roles.join('');
          //console.log(this.userservice.Roles.toString());
          //this.userservice.Roles = "User";
          //console.log(this.userservice.Roles);
          //console.log(res);
          //window.location.reload();
        },
        (err: HttpErrorResponse)=>{
          this.errorMessage = err.error;
          this.notLogged = true;
          //console.log(err);
          //console.log(this.errorMessage);
      });

    }

  }



}
