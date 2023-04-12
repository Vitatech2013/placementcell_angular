import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAdmin(username:any,password:any){
    return this.http.get('http://localhost:4000/admin/adminlogin?username=' + username + '&password=' +password)
  }
  AddOfficer(data:any){
    return this.http.post('http://localhost:4000/officer/register',data)
  }
  AddStd(data:any){
    return this.http.post('http://localhost:4000/student/registration',data)
  }
  getOfficer(){
    return this.http.get('http://localhost:4000/admin/officerdata')
  }
  getStd(){
    return this.http.get('http://localhost:4000/admin/studentdata')
  }
  EditOfficer(id:any,data:any){
    return this.http.put('http://localhost:4000/admin/officerupdate/'+ id,data)
  }
  DeleteOfficer(id:any){
    return this.http.delete('http://localhost:4000/admin/officer/' + id)
  }
  EditStd(id:any,data:any){
    return this.http.put('http://localhost:4000/admin/studentupdate/'+ id,data)
  }
  DeleteStd(id:any){
    return this.http.delete('http://localhost:4000/admin/officer/' + id)
  }
  ChngPwd(id:any,data:any){
    return this.http.put('http://localhost:4000/admin/updatepassword' + id,data)
  }
}
