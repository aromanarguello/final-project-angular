import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService, User } from '../../services/user-api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  theUser = new User();

  constructor(
    private routerThing: Router,
    private userThing: UserApiService
  ) { }

  ngOnInit() {
  }

  startLoginAjax(){
    this.userThing.postLogin(this.theUser)
      .then( () => {
        this.routerThing.navigate(['/profile']);
      })
      .catch ( err => {
        alert("Sorry something went wrong");
        console.log("Login Error")
        console.log( err )
      })
  }

}
