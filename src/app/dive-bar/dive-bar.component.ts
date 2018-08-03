import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-dive-bar',
  templateUrl: './dive-bar.component.html',
  styleUrls: ['./dive-bar.component.css']
})

export class DiveBarComponent implements OnInit {
	diveBarCocktails: RecipesModel[] = [];
	idsOfDrinks: Array<number> = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Pass in the entire library of cocktails. 
    // We'll grab the recipes we need for this list using the recipes' ids.
  	this.createDiveBarList(this.recipesService.cocktails);
  }

// Move this function to a service? so it can be reused
  createDiveBarList(cocktailsList: RecipesModel[]){
  	for(let i = 0; i<cocktailsList.length; i++){
		for(let j = 0; j<this.idsOfDrinks.length; j++){
  			if (cocktailsList[i].id === this.idsOfDrinks[j]){
  				this.diveBarCocktails.push(cocktailsList[i]);
  			}
  		}	
  	}
  }

}
