import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Survey {
  height:      number;
  weight:      number;
  age:         number;
  peanut:      boolean;
  lactose:     boolean;
  male:        boolean;
  female:      boolean;
  energyOne:   number;
  energyTwo:   number;
  energyThree: number;
  owner:       string;
}

@Injectable()
export class RecipeApiService {

  currentSurvey: Survey;

  constructor(private httpThing: HttpClient) { }

  postSurvey(surveyInfo: Survey){
    console.log(surveyInfo)

    return this.httpThing.post(
      `${environment.backendUrl}/api/survey`,
      surveyInfo,
      { withCredentials: true }
    )
    .toPromise()
    .then((apiResults: any) => {
      this.currentSurvey = apiResults.surveyInfo;
      console.log(this.currentSurvey)
      return apiResults;
    })
  }

  getResults() {
    return this.httpThing.get(
      `${environment.backendUrl}/api/results`,
      { withCredentials: true })
    .toPromise();
  }


  // get survey info to make the calculation => display on results page on the side... perhaps?



}
