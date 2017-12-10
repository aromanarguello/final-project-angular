import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment'

export class User {
  // signup form
  firstName: string;
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

  currentUser = User;

  constructor(private httpThing: HttpClient) { }

  // Post /api/sginup
  postSignup(userInfo: User) {
  return this.httpThing.post(
    `${environment.backendUrl}/api/signup`,
    userInfo // comes from the Component
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
userInfo
)
.toPromise()
.then( (apiResults: any) => {
  this.currentUser = apiResults.userInfo;
  return apiResults;
})
}


}
