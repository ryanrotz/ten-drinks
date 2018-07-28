import { Component } from '@angular/core';
import { DrinksListsService } from './drinks-lists.service';
import { DrinksListsModel } from './drinks-lists.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ten Drinks';
  drinksLists: DrinksListsModel[];

  constructor(private drinksListsService: DrinksListsService) { }

  ngOnInit() {
  	this.drinksLists = this.drinksListsService.drinksLists;
  }
}
