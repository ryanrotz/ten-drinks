import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-dive-bar',
  templateUrl: './dive-bar.component.html',
  styleUrls: ['./dive-bar.component.css']
})
export class DiveBarComponent implements OnInit {
	cocktails: RecipesModel[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  	this.cocktails = this.recipesService.cocktails;
  }

}
