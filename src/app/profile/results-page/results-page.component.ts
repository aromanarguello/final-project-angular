import { Component, OnInit } from '@angular/core';
import { RecipeApiService, Survey } from '../../services/recipe-api.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  theResults = new Survey();

  constructor(
    private activatedThing: ActivatedRoute,
    private routerThing:    Router,
    private recipeThing:    RecipeApiService
  ) { }

  ngOnInit() {
  
  }

  // getLastAjaxResults(urlId){
  //   this.recipeThing.getLastSurveyInfo(urlId)
  //   .then( (surveyResults: Survey) => {
  //     console.log(surveyResults)
  //     this.theResults  = surveyResults;
  //   })
  //   .catch( err => {
  //     console.log( err );
  //     console.log("Last survey result error");
  //   })
  // }

}
