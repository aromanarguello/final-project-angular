import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService, User } from '../../services/user-api.service'

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  theUser = new User();

  constructor(
    private routerThing: Router,
    private userThing:   UserApiService
  ) { }

  ngOnInit() {
  }

  startSignupAjax(){
    this.userThing.postSignup(this.theUser)
      .then(() => {
        this.routerThing.navigate(['']);
      })
      .catch( err => {
        alert("Sorry something went wrong!");
        console.log("Signup Error")
        console.log( err )
      })
  }

}
