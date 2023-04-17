import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentService } from '../Api/student.service';
import { StdEditJobsComponent } from '../std-edit-jobs/std-edit-jobs.component';

@Component({
  selector: 'app-std-view-jobs',
  templateUrl: './std-view-jobs.component.html',
  styleUrls: ['./std-view-jobs.component.scss']
})
export class StdViewJobsComponent {

    
  ViewAppliedJobs:any

  constructor(private Api:StudentService,
              private Routes:Router,
              private diologRef:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewApplyJobs().subscribe((res:any)=>{
      this.ViewAppliedJobs = res;
    })

  }


  edit(e:any){
    this.diologRef.open(StdEditJobsComponent,{
      width:'40%',
      height:"90%",
      data:e
    })
  }
  DeleteJob(d:any){
    this.Api.DeleteApplyJobs(d._id).subscribe((res:any)=>{
      window.location.reload()
    })
  }

  Resume(d:any){
    this.Api.Resume(d._id).subscribe((res:any)=>{
      console.log(res,"check");
      
      alert("File Downloaded Successfully")
     })
   }

}
