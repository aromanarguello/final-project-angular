import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './home-page/about-page/about-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { SurveyComponent } from './profile/survey/survey.component';
import { ResultsPageComponent } from './profile/results-page/results-page.component';
import { NotComponent } from './not/not.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfileComponent,
    RecipesPageComponent,
    SurveyComponent,
    ResultsPageComponent,
    NotComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
