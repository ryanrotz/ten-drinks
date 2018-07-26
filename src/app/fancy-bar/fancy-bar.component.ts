import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-bar',
  templateUrl: './fancy-bar.component.html',
  styleUrls: ['./fancy-bar.component.css']
})
export class FancyBarComponent implements OnInit {
  name = 'Cocktails to order at a fancy bar';
  shortDesc = 'Consider these your must try cocktails.';
  
  constructor() { }

  ngOnInit() {
  }

}
