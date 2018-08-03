import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-fancy-bar',
  templateUrl: './fancy-bar.component.html',
  styleUrls: ['./fancy-bar.component.css']
})
export class FancyBarComponent implements OnInit {
  fancyCocktails: RecipesModel[] = [];
  idsOfDrinks: Array<number> = [13, 14, 15, 16, 17, 18, 19, 20, 21, 2];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Pass in the entire library of cocktails. 
    // We'll grab the recipes we need for this list using the recipes' ids.
  	this.createDiveBarList(this.recipesService.cocktails);
  }

  createDiveBarList(cocktailsList: RecipesModel[]){
  	for(let i = 0; i<cocktailsList.length; i++){
		for(let j = 0; j<this.idsOfDrinks.length; j++){
  			if (cocktailsList[i].id === this.idsOfDrinks[j]){
  				this.fancyCocktails.push(cocktailsList[i]);
  			}
  		}	
  	}
  }

}
