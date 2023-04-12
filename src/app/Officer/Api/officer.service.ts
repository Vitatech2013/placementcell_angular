import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor(private http:HttpClient) { }

  getOfficer(EmailId:any,Password:any){
    return this.http.get('http://localhost:4000/officer/officerlogin?EmailId=' + EmailId + '&password=' +Password)
  }
}
