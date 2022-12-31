import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getData(): Observable<any>  {
    let url ="https://premadeinnovations.com/food/JSON/allitem.php";
    return this.http.get(url);
  }
}
