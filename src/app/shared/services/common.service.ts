import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  /* Get call */
  getCall(url: string, callBack: any) {
    this.http.get(url).subscribe(data => {
      return callBack(data);
    });
  }
}
