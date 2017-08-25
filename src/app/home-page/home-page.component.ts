import { Component, OnInit } from '@angular/core';
import { TopPartComponent } from './top-part/top-part.component';
import { CenterPartComponent } from './center-part/center-part.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
