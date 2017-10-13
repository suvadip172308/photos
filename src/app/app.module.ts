import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule,
         MdCardModule,
         MdMenuModule,
         MdToolbarModule,
         MdIconModule,
         MdListModule }          from '@angular/material';
import { MatCheckboxModule }     from '@angular/material';
import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { HeaderComponent }       from './header/header.component';
import { FooterComponent }       from './footer/footer.component';
import { ContainerComponent }    from './container/container.component';
import { LandingPageComponent }  from './landing-page/landing-page.component';
import { BlogComponent }         from './blog/blog.component';
import { BlogListComponent }     from './blog-list/blog-list.component';
import { ItemBlogComponent }     from './item-blog/item-blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonService }         from './shared/services/common.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    LandingPageComponent,
    BlogComponent,
    PageNotFoundComponent,
    BlogListComponent,
    ItemBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MarkdownToHtmlModule
  ],
  providers: [
    CommonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
