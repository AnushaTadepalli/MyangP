import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
 

import { ActivatedRoute, Router } from '@angular/router';
 
import { AuthServiceService } from '../auth-service.service';
 
 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent{
   loginS: string;
   users = [
     {
       "emailid": "anu@gmail.com",
       "password": "anu@123"
     },
     {
       "emailid": "abc@gmail.com",
       "password": "abc@123"
     }
   ]
     
constructor(private router: Router) { }



   onClickSubmit(data) {
     //alert("Entered Email id : " + data.emailid);
     //alert("Entered Password : " + data.password);
     //if (data.emailid == 'admin' && data.password == 'admin') {
     //  //this.loginS = 'Success';
     //  //window.location.href = "/Home";
     //  this.router.navigateByUrl("/Home");
     //}
     //else {
     //  this.loginS = 'Invalid User Credentials';
     //}



     for (let user of this.users) {
       if ((data.emailid == user.emailid) && (data.password == user.password)) {
         //this.loginS = true;
         this.router.navigateByUrl("/home1");
         //this.router.navigate([`Gateway`])
       }
       else {
         this.loginS = 'Invalid User Credentials';
       }
     }  
   }
   //username: string;
   //password: string;
   //constructor(private router: Router) { }​

   //model: any = {};
   //loading = false;
   //returnUrl: string;
   //  loginS: string;
   //constructor(
   //  private route: ActivatedRoute,
   //  private router: Router,
   //  private authenticationService: AuthServiceService,
   //  private alertService: AlertService) { }
   //ngOnInit() {
   //  // reset login status
   //  this.authenticationService.logout();
   //  // get return url from route parameters or default to ‘/’
   //  this.returnUrl = this.route.snapshot.queryParams['this.returnUrl'] || '/';
   //}
   //login(username:string,password:string) {
   //  if (username == 'admin' && password == 'admin') {
   //   //window.location.href = "/Home";
   //    this.router.navigateByUrl("/home1");


    //}
    //else {
    //  this.loginS = 'Invalid User Credentials';
    //}
     //this.loading = true;
     //this.authenticationService.login(this.model.username, this.model.password)
     //  .subscribe(
     //    data => {
     //      // login successful so redirect to return url
     //      this.router.navigate([this.returnUrl]);
     //    },
     //    error => {
     //      // login failed so display error
     //      this.alertService.error(error);
     //      this.loading = false;
     //    });
   //}
}
