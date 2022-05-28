import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any = [];

  constructor(public request: RequestService) {

    }

  ngOnInit(): void {

    this.request.getData("http://localhost:3000/data")
      .subscribe(data => {
        this.data = data
      })


  }


    }
