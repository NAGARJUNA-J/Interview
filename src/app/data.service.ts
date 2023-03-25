import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }

  getAllUsers(){
   return this.http.get('https://api.github.com/users')
  }


  getProfileData(id:String){
    return this.http.get('https://api.github.com/users/'+id)
  }
}
