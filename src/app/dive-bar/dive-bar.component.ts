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
	drinkIds: Array<number> = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // Pass in an array of ids for the cocktails that will comprise the dive bar list
    // Cocktail objects will be returned and used in the html.
    this.diveBarCocktails = this.recipesService.createDrinkList(this.drinkIds);
  }
}
