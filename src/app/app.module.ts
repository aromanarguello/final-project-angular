import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UserApiService } from './services/user-api.service'
import { RecipeApiService } from './services/recipe-api.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './home-page/about-page/about-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { SurveyComponent } from './profile/survey/survey.component';
import { ResultsPageComponent } from './profile/results-page/results-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JoinComponent } from './home-page/join/join.component';
import { LoginComponent } from './home-page/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfileComponent,
    RecipesPageComponent,
    SurveyComponent,
    ResultsPageComponent,
    NotFoundComponent,
    JoinComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserApiService,
    RecipeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
