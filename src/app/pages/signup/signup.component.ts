import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sigup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SigupComponent implements OnInit {
  constructor(private http: HttpClient, private userService: UserService) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit() {}

  //****************************************************************** */

  formSubmit() {
    //alert('submit');

    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('user is required !!');
      return;
    }

    //sddUser: userservice
    this.userService.addUser(this.user).subscribe({
      next: (data) => {
        //success
        console.log(data);
        alert('success');
      },
      error: (error) => {
        //error
        console.log(error);
        alert('something went wrong');
      },
    });

    /*
   this.userService.addUser(this.user).subscribe({
    next: (data) => {
      console.log(data);
      this._snack.open('Registered Successfully', 'OK', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['green-snackbar', 'login-snackbar'],
      });
    },
    error: (error) => {
      console.log(error);
      this._snack.open('Something went Wrong', 'OK', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['red-snackbar', 'login-snackbar'],
      });
    },
    });*/
  }

  //****************************************************************** */

  //this.user
}
