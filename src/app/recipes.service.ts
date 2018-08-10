import { Injectable } from '@angular/core';
import { RecipesModel } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

	cocktails: RecipesModel[] = [
		{
			id: 1,
			name: 'Whiskey Sour',
			shortDesc: 'Lemon, whiskey, and sugar. Refreshing.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 2,
			name: 'Martini',
			shortDesc: 'Gin, dry vermouth, lemon twist. Strong, silky, boozy, and dry.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 3,
			name: 'Lemon Drop',
			shortDesc: 'Lemon, lemon, lemon. Crisp and refreshing.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 4,
			name: 'Tom Collins',
			shortDesc: 'Gin, lemon, club soda. Light and refreshing.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 5,
			name: 'Moscow Mule',
			shortDesc: 'Vodka, ginger beer, lime'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 6,
			name: 'Daiquiri',
			shortDesc: 'Rum, lime, sugar'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 7,
			name: 'Gimlet',
			shortDesc: 'Gin, lime, sugar. If you\'re in the mood for lime.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 8,
			name: 'Dark n Stormy',
			shortDesc: 'Rum, ginger beer, lime.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 9,
			name: 'Long Island Ice Tea',
			shortDesc: 'All the booze, citrus, and coke. Not exactly classy.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 10,
			name: 'White Russian',
			shortDesc: 'Vodka, coffee liqueur, cream. Heavy and boozy.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 11,
			name: 'Margarita',
			shortDesc: 'Tequila, lime, orange liqueur, sugar'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 12,
			name: 'Old Fashioned',
			shortDesc: 'Whiskey, sugar, bitters'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 13,
			name: 'Aviation',
			shortDesc: 'Gin, lemon, maraschino, violette liqueur. Tastes like purple. Looks like baby blue sky. Similar to the Corpse Reviver no. 2'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 14,
			name: 'Caipirinha',
			shortDesc: 'Cachaca, lime, sugar. A cross between a margarita and mojito. Pronounced \'Kai-pur-reen-yah\''
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 15,
			name: 'French 75',
			shortDesc: 'Gin or brandy, lemon, champagne'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 16,
			name: 'White Lady',
			shortDesc: 'Gin, orange liqueur, lemon, sugar, egg white'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 17,
			name: 'Sidecar',
			shortDesc: 'Cognac (brandy), orange liqueur, lemon, sugar'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 18,
			name: 'Mint Julep',
			shortDesc: 'Whiskey, mint, sugar, lots of ice'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 19,
			name: 'Corpse Reviver No. 2',
			shortDesc: 'Gin, orange liqueur, lemon, white wine apertif, absinthe rinse'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 20,
			name: 'Cosmopolitan',
			shortDesc: 'Vodka, cranberry, orange liqueur, lime'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
		{
			id: 21,
			name: 'Manhattan',
			shortDesc: 'Whiskey, sweet vermouth, orange bitters. Strong and boozy.'
			// longDesc: string,
			// image: string,
			// ingredients: [];
			// directions: string;
		},
	]

  constructor() { }

  // An array of cocktail ids is passed in
  // Returns an array of cocktail objects
  createDrinkList(drinkIds){
  	// var requestedCocktails = [];
  	// for(let i=0; i<this.cocktails.length; i++){
  	// 	if(drinkIds.includes(this.cocktails[i].id)){
  	// 		requestedCocktails.push(this.cocktails[i])
  	// 	}
  	// }

  	var requestedCocktails = this.cocktails.filter(cocktail => {
  		return drinkIds.indexOf(cocktail.id) !== -1
  	})

  	return requestedCocktails;
  }
}




















