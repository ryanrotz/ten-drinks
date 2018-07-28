import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { DrinksListsService } from './drinks-lists.service';
import { RecipesService } from './recipes.service'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiveBarComponent } from './dive-bar/dive-bar.component';
import { FancyBarComponent } from './fancy-bar/fancy-bar.component';
import { MocktailsComponent } from './mocktails/mocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiveBarComponent,
    FancyBarComponent,
    MocktailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule

  ],
  providers: [DrinksListsService, RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
