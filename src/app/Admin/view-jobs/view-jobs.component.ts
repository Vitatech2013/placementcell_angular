import { Component } from '@angular/core';
import { AdminService } from '../admin-login/Api/admin.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.scss']
})
export class ViewJobsComponent {
  
  Jobs:any;
  constructor(private Api:AdminService){}

  ngOnInit(): void {
    this.Api.ViewJobs().subscribe((res:any)=>{
      this.Jobs = res;
    })
  }

}
