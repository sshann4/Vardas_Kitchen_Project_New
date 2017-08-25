import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopPartComponent } from './home-page/top-part/top-part.component';
import { CenterPartComponent } from './home-page/center-part/center-part.component';
import { MostRecommendedComponent } from './home-page/center-part/most-recommended/most-recommended.component';
import { SidePartComponent } from './home-page/center-part/side-part/side-part.component';
import { SwitchRecipesComponent } from './home-page/center-part/switch-recipes/switch-recipes.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SpecificRecipePageComponent } from './specific-recipe-page/specific-recipe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopPartComponent,
    CenterPartComponent,
    MostRecommendedComponent,
    SidePartComponent,
    SwitchRecipesComponent,
    ResultPageComponent,
    SpecificRecipePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
