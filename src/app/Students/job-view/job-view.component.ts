import { Component } from '@angular/core';
import { JobApplyComponent } from '../job-apply/job-apply.component';
import { StudentService } from '../Api/student.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss']
})
export class JobViewComponent {
  ViewJobs:any

  constructor(private Api:StudentService,
              private Routes:Router,
              private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.Jobs().subscribe((res:any)=>{
      this.ViewJobs = res;
    })

  }


  edit(e:any){
    this.dialog.open(JobApplyComponent,{
      width:"63%",
      height:"85%",
      data:e
    })
  }

}
