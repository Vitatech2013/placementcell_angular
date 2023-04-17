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
  AddStd(data:any){
    return this.http.post('http://localhost:4000/student/registration',data)
  }
  ViewProfile(emailid:any){
    return this.http.get('http://localhost:4000/student/viewprofile?emailid=' + emailid)
  }
  UpdateProfile(id:any,data:any){
    return this.http.put('http://localhost:4000/student/updateprofile/'+id,data) 
  }
  ViewCompany(){
    return this.http.get('http://localhost:4000/student/viewcompany')
  }
  Jobs(){
    return this.http.get('http://localhost:4000/student/viewjob')
  }
  ApplyJob(data:any){
    return this.http.post('http://localhost:4000/student/applyjob',data)
  }
  ViewApplyJobs(){
    return this.http.get('http://localhost:4000/student/applyjob')
  }
  UpdateApplyJobs(id:any,data:any){
    return this.http.put('http://localhost:4000/student/update/'+id,data)
  }
  DeleteApplyJobs(id:any){
    return this.http.delete('http://localhost:4000/student/applyjob/'+id)
  }
  Resume(id:any){
    return this.http.get('http://localhost:4000/student/download/'+id)
  }
}
