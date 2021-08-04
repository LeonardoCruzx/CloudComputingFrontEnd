import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyImage } from '../interfaces/myImage';

import { v4 as uuidv4 } from 'uuid';

const LIST_URL = environment.baseUrl + "get-all-imgs/Frontend/";
const EFFECT_URL = environment.baseUrl + "get-img-with-effect/";
const DELETE_URL = environment.baseUrl + "delete-img/";
const UPLOAD_URL = environment.baseUrl + "upload-categorized-img/Frontend/";
const GET_CATEGORIZED_URL = environment.baseUrl + "get-categorized-img/";

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

  public getImageWithEffect(folder:String, filename: String): Observable<String>{
      return this.http.get<String>(EFFECT_URL + folder + "/" + filename + "/");
  }

  public deleteMyImage(public_id: String): Observable<any>{
      return this.http.delete(DELETE_URL + public_id + "/")
  }

  public uploadImage(file: File): Observable<MyImage>{
      const formData = new FormData();
      formData.append("img", file, file.name);
      return this.http.post<MyImage>(UPLOAD_URL + uuidv4() + "/", formData);
  }

  public getCategorizedImage(tag: String): Observable<MyImage[]>
  {
      return this.http.get<MyImage[]>(GET_CATEGORIZED_URL + "?tag=" + tag);
  }
}
