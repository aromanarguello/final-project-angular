import { Component, OnInit } from '@angular/core';
import { RecipeApiService, Survey }  from '../services/recipe-api.service';
import { ActivatedRoute, Router }    from '@angular/router';

@Component({
  selector: 'app-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.css']
})
export class SuggestionsPageComponent implements OnInit {

 results: Survey[] = [];

  constructor(
    private activatedThing: ActivatedRoute,
    private routerThing:    Router,
    private recipeThing:    RecipeApiService
  ) { }

  ngOnInit() {
    this.recipeThing.getResults()
      .then( (surveyResults: Survey[]) =>{
        this.results = surveyResults;
      })
      .catch( err => {
      alert('Sorry! Something went wrong.')
      console.log( err )
    });
  }

}
