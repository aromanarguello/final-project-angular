import { Component, OnInit }                  from '@angular/core';
import { RecipeApiService, Survey, Recipes }  from '../services/recipe-api.service';
import { ActivatedRoute, Router }             from '@angular/router';

@Component({
  selector:    'app-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.css']
})
export class SuggestionsPageComponent implements OnInit {

 results:     Survey[]  = [];
 recipes:     Recipes[] = [];
 resultArray: any       = [];

  constructor(
                private activatedThing: ActivatedRoute,
                private routerThing:    Router,
                private recipeThing:    RecipeApiService
              ) { }

  ngOnInit() {
    this.recipeThing.getResults()
      .then( ( surveyResults: Survey[] ) =>{
        this.results = surveyResults;
        console.log( this.results)
        return this.results.forEach( oneResult => {
          const age                = oneResult.age;
          const height             = oneResult.height;
          const weight             = oneResult.weight;
          const ageConstantMale    = age    * 6.755;
          const ageConstantFem     = age    * 4.676;
          const weightConstantMale = weight * 13.75;
          const weightConstantFem  = weight * 9.563;
          const heightConstantMale = height * 5.03;
          const heightConstantFem  = height * 1.850;


          const maleCalc           = 66.5  + weightConstantMale + heightConstantMale - ageConstantMale;
          const femaleCalc         = 655.1 + weightConstantFem  + heightConstantFem  - ageConstantFem;

          if( oneResult.male === true ) {
            console.log( maleCalc )
            this.resultArray.push( Math.floor( maleCalc ) );
          }
          else if( oneResult.female === true ) {
            console.log( femaleCalc )
            this.resultArray.push( Math.floor( femaleCalc ) );
          }
        })
      })
      .catch( err => {
      alert( 'Sorry! Something went wrong.' )
      console.log( err )
    });

    this.recipeThing.getRecipes()
    .then( ( recipeResults: Recipes[] ) => {
      this.recipes = recipeResults;
    })
  }

}
