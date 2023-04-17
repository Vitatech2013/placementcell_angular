import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor(private http:HttpClient) { }

  getOfficer(EmailId:any,Password:any){
    return this.http.get('http://localhost:4000/officer/officerlogin?EmailId=' + EmailId + '&Password=' +Password)
  }
  AddOfficer(data:any){
    return this.http.post('http://localhost:4000/officer/register',data)
  }
  ViewOfficer(Name:any){
    return this.http.get('http://localhost:4000/officer/viewprofile?Name=' + Name)
  }
  EditOfficer(id:any,data:any){
    return this.http.put('http://localhost:4000/officer/'+ id,data)
  }
  DeleteOfficer(id:any){
    return this.http.delete('http://localhost:4000/officer/' + id)
  }
  AddCompany(data:any){
    return this.http.post('http://localhost:4000/officer/addcompany',data)
  }
  ViewCompany(){
    return this.http.get('http://localhost:4000/officer/viewcompany')
  }
  EditCompany(id:any,data:any){
    return this.http.put('http://localhost:4000/officer/companyupdate/'+ id,data)
  }
companyDelete(id:any){
  return this.http.delete('http://localhost:4000/officer/company/'+id)
}
  AddJobs(data:any){
    return this.http.post('http://localhost:4000/officer/addjob',data)
  }
  ViewJobs(){
    return this.http.get('http://localhost:4000/officer/viewjobdetails')
  }
  EditJobs(id:any,data:any){
    return this.http.put('http://localhost:4000/officer/jobupdate/'+ id,data)
  }
  DeleteJobs(id:any){
    return this.http.delete('http://localhost:4000/officer/job/' + id)
  }
  ViewAppliedJobs(){
    return this.http.get('http://localhost:4000/officer/viewapplyjob')
  }
  Status(id:any,data:any){
    return this.http.put('http://localhost:4000/officer/statusupdate/' + id,data)
  }
  DownloadFile(id:any){
    return this.http.get('http://localhost:4000/officer/download/' + id)
  }
  ChngPwd(id:any,data:any){
    return this.http.put('http://localhost:4000/officer/updatepassword/' + id,data)
  }
}
