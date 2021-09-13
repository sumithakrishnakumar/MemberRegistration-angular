import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  createUser(user:any){
return this._http.post("http://localhost:3000/users",user);
  }

  addDependent(dependent:any){
    return this._http.post("http://localhost:3000/dependent1",dependent)
  }

  addDependent2(dependent2:any){
    return this._http.post("http://localhost:3000/dependent2",dependent2)
  }
  
  addclaims(claims:any){
    return this._http.post("http://localhost:3000/claims",claims)
  }
  addclaimsdependent(claimsdependent:any){
    return this._http.post("http://localhost:3000/claimsdependent1",claimsdependent)
  }
}
