import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeApiService, Survey } from '../../services/recipe-api.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

 theSurvey = new Survey();

  constructor(
    private activatedThing: ActivatedRoute,
    private routerThing:    Router,
    private recipeThing:    RecipeApiService
  ) { }

  ngOnInit() {
  }

  surveyAjax(){
    this.recipeThing.postSurvey(this.theSurvey)
    .then( () => {
      this.routerThing.navigate(['/suggestions'])
    })
    .catch( err => {
      // alert("Sorry something went wrong");
      console.log("Signup Error")
      console.log(err)
    })
  }


}
