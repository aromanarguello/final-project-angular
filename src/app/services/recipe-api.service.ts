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
  energyOne:   number;
  energyTwo:   number;
  energyThree: number;
}

@Injectable()
export class RecipeApiService {

  currentSurvey: Survey;

  constructor(private httpThing: HttpClient) { }

  postSurvey(surveyInfo: Survey){
    return this.httpThing.post(
      `${environment.backendUrl}/api/survey`,
      surveyInfo
    )
    .toPromise()
    .then((apiResults: any) => {
      this.currentSurvey = apiResults.surveyInfo;
      return apiResults;
    })
  }


}
