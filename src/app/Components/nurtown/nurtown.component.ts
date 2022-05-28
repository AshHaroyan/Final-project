import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-nurtown',
  templateUrl: './nurtown.component.html',
  styleUrls: ['./nurtown.component.css']
})
export class NurtownComponent implements OnInit {
  data: any = [];
  project: any = [];

  constructor(public request: RequestService) {


  }
  ngOnInit(): void {

    // this.data()
    //   this.data.createData("http://localhost:3000/",{}).subscribe(() => {
    //     this.data =this.project;
    //   })

    this.request.getData("http://localhost:3000/project")
      .subscribe(data => {
        this.data = data
      })


  }


}
