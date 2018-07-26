import { Injectable } from '@angular/core';
import { DrinksListsModel } from './drinks-lists.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksListsService {

	drinksLists: DrinksListsModel[] = [
		{
			id: 1,
			title: 'Cocktails to order at ANY bar',
			shortDesc: 'At a dive with no menu? Order smart and quick!'
		},
		{
			id: 2,
			title: 'Cocktails to order at a fancy bar',
			shortDesc: 'Consider these your must try cocktails..'
		},
		{
			id: 3,
			title: 'Mocktails to enjoy',
			shortDesc: 'What to order sans booze.'
		}
	]


  constructor() { }
}
