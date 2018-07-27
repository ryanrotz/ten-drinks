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
			shortDesc: 'Gin and dry vermouth. Strong, silky, and boozy.'
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
		}
	]


  constructor() { }
}
