import { Component, OnInit } from '@angular/core';
import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'web-api';
  data1 :any =[];
  constructor(public api:ApiService) {}
  ngOnInit(): void {
    this.api.getData().subscribe(data=>{
      console.warn(data)
      this.data1=data;
    })  }

}
