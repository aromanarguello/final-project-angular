import { Component, OnInit} from '@angular/core';
import { UserApiService } from './services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (
    private userThing:   UserApiService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.userThing.getCheckLogin()
    // no ".then()" because "getCheckLogin" already has the ".then()" that we need
    .catch (() => {
      // alert("Sorry! Something went wrong")
  })
  }

  startLogOutAjax(){
    this.userThing.logout()
    .then( () => {
        this.routerThing.navigate([''])
    })
    .catch(() => {
      alert('Sorry something went wrong!')
    })
  }

}
