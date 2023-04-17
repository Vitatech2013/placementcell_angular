import { Component, OnInit } from '@angular/core';
import { OfficerService } from '../Api/officer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StatusComponent } from './status/status.component';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.scss']
})
export class AppliedJobsComponent implements OnInit{
  
  ViewAppliedJobs:any

  constructor(private Api:OfficerService,
              private Routes:Router,
              private diologRef:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewAppliedJobs().subscribe((res:any)=>{
      this.ViewAppliedJobs = res;
    })

  }


  Status(e:any){
    this.diologRef.open(StatusComponent,{
      width:'40%',
      height:"90%",
      data:e
    })
  }
  Resume(d:any){
    this.Api.DownloadFile(d._id).subscribe((res:any)=>{
      console.log(res,"check");
      
      alert("File Downloaded Successfully")
     })
   }

}
