import { Component, OnInit } from '@angular/core';
import {RequestService} from "../services/request.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  data: any =[];

  constructor(public request: RequestService) { }

  ngOnInit(): void {

    this.request.createData('http://localhost:3000/', {}).subscribe((res) => {
      this.getRequest();
    })
  }


  getRequest () {
    this.request.getData('http://localhost:3000/').subscribe((res: any) => {
      console.log(res)
      this.data = res;
    })

}



}
