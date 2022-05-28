import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  data: any = [];
  constructor( public http: HttpClient) { }


  getData(url: string) {
    return this.http.get(url);
  }


  createData(url: string, body: any) {
    return this.http.post(url, body);
  }


}
