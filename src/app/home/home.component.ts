import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    //authenticating the user
    // if(localStorage.getItem('token')!=null){
    //   this.userService.checkToken().subscribe((response: any)=>{
    //     console.log(response);
    //     this.router.navigate(['/projects/dashboard']);
    //   }, (error: any)=>{
    //     console.log(error);
    //   })
    // }
  }

  // signupAction(){
  //   const dialogConfig= new MatDialogConfig();
  //   dialogConfig.width="550px";
  //   this.dialog.open(SignupComponent, dialogConfig);

  // }
  //   forgotPasswordAction(){
  //     const dialogConfig= new MatDialogConfig();
  //     dialogConfig.width="500px";
  //     this.dialog.open(ForgotPasswordComponent,dialogConfig)
  //   }
  //   loginAction(){
  // const dialogConfig= new MatDialogConfig();
  // dialogConfig.width="500px";
  // this.dialog.open(LoginComponent,dialogConfig);
  //   }
}
