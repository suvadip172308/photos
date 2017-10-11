import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LandingPageComponent }  from './landing-page/landing-page.component';
import { BlogComponent }         from './blog/blog.component';
import { ItemBlogComponent }     from './item-blog/item-blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: ItemBlogComponent },
  { path: 'intro', component: LandingPageComponent },
  { path: '',   redirectTo: '/intro', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}