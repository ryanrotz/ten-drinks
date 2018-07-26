import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mocktails',
  templateUrl: './mocktails.component.html',
  styleUrls: ['./mocktails.component.css']
})
export class MocktailsComponent implements OnInit {
  name = 'Mocktails'; 
  shortDesc = 'What to order sans booze.';
  constructor() { }

  ngOnInit() {
  }

}
