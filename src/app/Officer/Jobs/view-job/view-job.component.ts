import { Component } from '@angular/core';
import { OfficerService } from '../../Api/officer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditJobComponent } from '../edit-job/edit-job.component';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent {
  ViewJobs:any

  constructor(private Api:OfficerService,
              private Routes:Router,
              private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewJobs().subscribe((res:any)=>{
      this.ViewJobs = res;
    })

  }


  edit(e:any){
    this.dialog.open(EditJobComponent,{
      width:"50%",
      height:"62%",
      data:e
    })
  }
  Delete(d:any){
    this.Api.DeleteJobs(d._id).subscribe((res:any)=>{
      window.location.reload();
    })
  }

}
