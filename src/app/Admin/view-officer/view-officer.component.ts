import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-login/Api/admin.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditOfficerComponent } from '../edit-officer/edit-officer.component';

@Component({
  selector: 'app-view-officer',
  templateUrl: './view-officer.component.html',
  styleUrls: ['./view-officer.component.scss']
})
export class ViewOfficerComponent implements OnInit{
  Officers:any;
  
  constructor(private Api:AdminService,private Routes:Router,private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.getOfficer().subscribe((res:any)=>{
      this.Officers = res;
    })
  }
  edit(e:any){
    this.dialog.open(EditOfficerComponent,{
      width:"40%",
      height:"100%",
      data:e
    })
  }

  Delete(d:any){
    console.log(d,"d");
    
    this.Api.DeleteOfficer(d).subscribe((res:any)=>{
      window.location.reload()
    })
  }

}
