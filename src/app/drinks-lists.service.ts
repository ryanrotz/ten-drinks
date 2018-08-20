import { Injectable } from '@angular/core';
import { DrinksListsModel } from './drinks-lists.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksListsService {

	drinksLists: DrinksListsModel[] = [
		{
			id: 1,
			title: 'Dive bar',
			shortDesc: 'At a dive with no menu? Order smart and quick!',
			view: '/dive-bar'
		},
		{
			id: 2,
			title: 'Fancy bar',
			shortDesc: 'Consider these your must try cocktails..',
			view: '/fancy-bar'
		},
		{
			id: 3,
			title: 'Mocktails',
			shortDesc: 'What to order sans booze.',
			view: '/mocktails'
		},
		{
			id: 4,
			title: 'Gin',
			shortDesc: 'What to order sans booze.',
			view: '/'
		},
		{
			id: 6,
			title: 'Tiki',
			shortDesc: 'What to order sans booze.',
			view: '/'
		},
		{
			id: 7,
			title: 'Whiskey',
			shortDesc: 'What to order sans booze.',
			view: '/'
		},

	]


  constructor() { }
}
