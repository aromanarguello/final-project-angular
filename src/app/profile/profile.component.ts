import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { RecipeApiService } from '../services/recipe-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor( public userThing: UserApiService ) { }

  ngOnInit() {
  }



}
