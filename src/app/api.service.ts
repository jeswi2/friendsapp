import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewFriend=()=>{
    return this.http.get("http://dummyapifriends.herokuapp.com/view")
  }
}
