import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  { LoginAccount } from '../loginAccount'
import { UserService } from '../user.service';
import { UserAccount } from '../userAccount';
import { UserRegistrationAccount } from './userRegistrationAccount';
import { RegistrationService } from './userRegistrationAccount.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title:"Quickr Login Page";




public userRegistrationAccount:UserRegistrationAccount[];
  


submitted:boolean=false;
 response: any ;
  constructor(private fb: FormBuilder,private route:Router,private userService: UserService,private reg:RegistrationService) { }
  loginForm: FormGroup;

  loginAccount:LoginAccount=new LoginAccount();
  userAccount:UserAccount=new UserAccount();
  ngOnInit() {
    this.loginForm=this.fb.group(
{
  email:['',[ Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@gmail.com+$')] ],
  password:['',[Validators.required,Validators.maxLength(15),Validators.minLength(6)]]

})
  }
  onLogin(){
    this.submitted=true
    console.log("in login() method")
    console.log(this.loginAccount)
      this.userService.validateUser(this.loginAccount)
      .subscribe((response) =>{ 
        this.response=response
        console.log(this.response)});
      
      console.log(this.loginAccount)

      if(this.response){

      }
      this.reg.getAllUsers().subscribe((response)=>{
        this.response=response;
        console.log(this.response)
      });
      console.log("after");
    //this.route.navigateByUrl("product");
     }
     onProduct():any{
     

      this.route.navigateByUrl("");
    

     }
     onLoginPage(){
       
           this.route.navigateByUrl("home");
     }
}




    /* constructor(private pro:ProductService){}
  
   ngOnInit(){
  this.pro. getAllProducts().subscribe((response)=>{
    this.response=response;
    console.log(this.response)
  });
  console.log("after");
   }
  } */