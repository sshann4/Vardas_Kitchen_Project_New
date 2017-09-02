import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styleUrls: ['./top-part.component.css']
})

export class TopPartComponent implements OnInit {
  //variable to hold boolean value to style top-part size
   isSmallHeader = false;

  constructor(private router: Router, private route:ActivatedRoute) {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        // console.log(event.url, this.i++);
        // console.log(event.url.includes("/search"), "for search");
        // console.log(event.url.includes("/specific-recepies"), "for specific-recepie");
        if(event.url.includes("/search")|| event.url.includes("/specific-recepies") ){
          this.isSmallHeader = true;
          // console.log(this.isSmallHeader);
        }
        else {
          this.isSmallHeader = false;
          // console.log(this.isSmallHeader);
        }
      }
    })
  }

  ngOnInit() {

      // console.log(this.router.isActive('/search/:id',false));

  };


}
