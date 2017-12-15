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
        console.log(this.results)
        this.results.forEach( oneResult => {
          const age    = oneResult.age;
          const height = oneResult.height;
          const weight = oneResult.weight;
          console.log(66.5 +(13.75 * weight) + (5..03 * height) - (6.755 * age));
        })
      })
      .catch( err => {
      alert('Sorry! Something went wrong.')
      console.log( err )
    });
  }

}
