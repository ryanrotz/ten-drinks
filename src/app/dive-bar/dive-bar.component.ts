import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dive-bar',
  templateUrl: './dive-bar.component.html',
  styleUrls: ['./dive-bar.component.css']
})
export class DiveBarComponent implements OnInit {
  name = 'Cocktails to order at ANY bar';
  shortDesc = 'At a dive with no menu? Order smart and quick!';
  constructor() { }

  ngOnInit() {
  }

}
