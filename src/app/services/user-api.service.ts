import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment'

export class User {
  // signup form
  firstName: string;
  lastName:  string;
  // signup & login forms
  email:     string;
  password:  string;
  // assigned by the database
  _id:       string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(public httpThing: HttpClient) { }

  // Post /api/sginup
  postSignup(userInfo: User) {
  return this.httpThing.post(
    `${environment.backendUrl}/api/join`,
    userInfo,
    // send the cookies even to a different domain
    { withCredentials: true }
  ).toPromise()
    .then( (apiResults: any ) => {
      this.currentUser = apiResults.userInfo;
      return apiResults;
    });
}

// POST api/LoginComponent
  postLogin(userInfo: User) {
  return this.httpThing.post(
  `${environment.backendUrl}/api/login`,
  userInfo,
  // send the cookies even to a different domain
  { withCredentials: true }
  )
  .toPromise()
  .then( (apiResults: any) => {
    this.currentUser = apiResults.userInfo;
    return apiResults;
  })
  }

  // DELETE/api/logout
  logout(){
    return this.httpThing.delete(
    `${environment.backendUrl}/api/logout`,
        { withCredentials: true }
      )
      .toPromise()
      .then( apiResults => {
        // update 'currentUser' since we are logged OUT
        this.currentUser = null;
        // return 'apiResults' for the component
        return apiResults;
      });
}

//GET /checklogin
  getCheckLogin() {
  return this.httpThing.get(
    `${environment.backendUrl}/api/checklogin`,
    { withCredentials: true }
  )
  .toPromise()
  .then( (apiResults: any) => {
    // update "currentUser" in case we are logged in
    this.currentUser = apiResults.userInfo;
    // return "apiResults" for the component
    return apiResults;
  })
}

}
