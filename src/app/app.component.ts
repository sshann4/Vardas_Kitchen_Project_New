import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  isSmallHeader = false;

  constructor(private router: Router, private route:ActivatedRoute) {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        // console.log(event.url, this.i++);
        // console.log(event.url.includes("/search"), "for search");
        // console.log(event.url.includes("/specific-recepies"), "for specific-recepie");
        if(event.url.includes("/search")|| event.url.includes("/specific-recepies") ){
          this.isSmallHeader = true;
        }
        else {
          this.isSmallHeader = false;
        }
      }
    })
  }

}
