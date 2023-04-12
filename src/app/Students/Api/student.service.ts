import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStud(emailid:any,password:any){
    return this.http.get('http://localhost:4000/student/studentlogin?emailid=' + emailid + '&password=' + password)
  }
}
