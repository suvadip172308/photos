import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  private  users: Array<string>;
  private imageUrl: string;
  
  constructor() { }

  ngOnInit() {
    this.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];
    this.imageUrl = "https://flytrapman.files.wordpress.com/2013/11/venus890-1-1.jpg";
  }

}
