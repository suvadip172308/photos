import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { ItemConstant } from '../../constant';
import { CommonService } from '../shared/services/common.service';


@Component({
  selector: 'app-item-blog',
  templateUrl: './item-blog.component.html',
  styleUrls: ['./item-blog.component.css'],
})
export class ItemBlogComponent implements OnInit {
  titleText: any;
  data: string;
  constant: ItemConstant;
  
  constructor( private commonservice : CommonService ) {
  }

  ngOnInit() {
    this.constant = new ItemConstant(); 
    let url = this.constant.baseUrl + '/blog.md';
    this.commonservice.getCall(url, (data) => {
      this.data = data._body;
    }) ;
  }

}
