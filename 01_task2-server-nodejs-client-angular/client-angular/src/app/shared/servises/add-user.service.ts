import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private httpClient:HttpClient) { 


  }


  
  AddUser(user:any){
  return  this.httpClient.post("http://localhost:3500/api/user",user);
  }
}
