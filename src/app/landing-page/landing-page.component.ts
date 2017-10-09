import { Component, OnInit } from '@angular/core';

import { RouteNavigationModel } from '../shared/models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private imageUrl: string;
  private cardImageUrl: string;
  private profileImageUrl: string;
  private navigationList: RouteNavigationModel[];

  constructor() { }

  ngOnInit() {
    
    this.imageUrl = "https://flytrapman.files.wordpress.com/2013/11/venus890-1-1.jpg";
    this.cardImageUrl = "http://68.media.tumblr.com/525b9e089db6911da042dc9d836288e4/tumblr_odykgb7cZG1s308l9o1_500.gif";
    this.profileImageUrl = "../../assets/images/profile.jpg";
    
    this.navigationList = [
      { route: 'portfolio', text: 'PORTFOLIO' },
      { route: 'blog', text: 'BLOG' },
      { route: 'photography', text: 'PHOTOGRAPHY' },
      { route: 'design', text: 'DESIGN' },
      { route: 'technology', text: 'TECHNOLOGY' },
      { route: 'contact', text: 'CONTACT' },
      { route: 'resume', text: 'RESUME' }
    ];
  }

}
