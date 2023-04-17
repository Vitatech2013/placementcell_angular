import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-login/Api/admin.service';

@Component({
  selector: 'app-view-apply-jobs',
  templateUrl: './view-apply-jobs.component.html',
  styleUrls: ['./view-apply-jobs.component.scss']
})
export class ViewApplyJobsComponent implements OnInit{

  students:any;
  constructor(private Api:AdminService){}

  ngOnInit(): void {
    this.Api.ViewApplyJobs().subscribe((res:any)=>{
      this.students = res;
    })
  }

}
