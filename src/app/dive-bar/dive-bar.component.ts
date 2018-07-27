import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-dive-bar',
  templateUrl: './dive-bar.component.html',
  styleUrls: ['./dive-bar.component.css']
})

export class DiveBarComponent implements OnInit {
	allCocktails: RecipesModel[];
	diveBarCocktails: RecipesModel = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  	this.allCocktails = this.recipesService.cocktails;
  	this.createDiveBarList(this.allCocktails);
  }

  createDiveBarList(cocktailsList: RecipesModel[]){
  	for(let i = 0; i<cocktailsList.length; i++){
  		if(cocktailsList[i].name === 'Whiskey Sour') {
  			this.diveBarCocktails.push(cocktailsList[i]);
  			console.log(this.diveBarCocktails);
  		}	
  	}
  }

}
