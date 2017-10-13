/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemBlogPayloadService } from './item-blog-payload.service';

describe('ItemBlogPayloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemBlogPayloadService]
    });
  });

  it('should ...', inject([ItemBlogPayloadService], (service: ItemBlogPayloadService) => {
    expect(service).toBeTruthy();
  }));
});
