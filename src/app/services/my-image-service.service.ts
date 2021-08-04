import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyImage } from '../interfaces/myImage';


const LIST_URL = environment.baseUrl + "/get-all-imgs"
@Injectable({
  providedIn: 'root'
})
export class MyImageServiceService {

  constructor(
      private http: HttpClient
  ) { }

  public getAllImages(): Observable<MyImage[]>{
      return this.http.get<MyImage[]>(LIST_URL);
  }
}
