import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { SurveyComponent } from './profile/survey/survey.component';
import { ResultsPageComponent } from './profile/results-page/results-page.component';
import { JoinComponent } from './home-page/join/join.component';
import { LoginComponent } from './home-page/login/login.component';
import { SuggestionsPageComponent} from './suggestions-page/suggestions-page.component';
import { AboutPageComponent} from './home-page/about-page/about-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

{ path: "",             component: HomePageComponent },
{ path: "join",         component: JoinComponent },
{ path: "login",        component: LoginComponent },
{ path: "about",        component: AboutPageComponent },
{ path: "profile",      component: ProfileComponent },
{ path: "recipes",      component: RecipesPageComponent },
{ path: "survey",       component: SurveyComponent },
{ path: "results",      component: ResultsPageComponent },
{ path: "suggestions",  component: SuggestionsPageComponent },
{ path: "**",           component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
