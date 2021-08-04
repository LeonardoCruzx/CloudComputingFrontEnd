import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyImage } from '../interfaces/myImage';


const LIST_URL = environment.baseUrl + "get-all-imgs/Frontend/"
const EFFECT_URL = environment.baseUrl + "download-img-with-effect/"

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

  public getImageWithEffect(folder:String, public_id: String): Observable<String>{
      return this.http.get<String>(EFFECT_URL + folder + "/" + public_id + "/");
  }
}
