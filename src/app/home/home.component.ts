import { Component, OnInit } from '@angular/core';
import { DrinksListsService } from '../drinks-lists.service';
import { DrinksListsModel } from '../drinks-lists.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drinksLists: DrinksListsModel[];

  constructor(private drinksListsService: DrinksListsService) { }

  ngOnInit() {
  	this.drinksLists = this.drinksListsService.drinksLists;
  }

}
