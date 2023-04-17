import { Router} from '@angular/router';
import { OfficerService } from './../../Api/officer.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCompanyComponent } from '../edit-company/edit-company.component';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit{

  ViewCompany:any

  constructor(private Api:OfficerService,
              private Routes:Router,
              private diologRef:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewCompany().subscribe((res:any)=>{
      this.ViewCompany = res;
    })

  }


  edit(e:any){
    this.diologRef.open(EditCompanyComponent,{
      width:'55%',
      height:"65%",
      data:e
    })
  }
  DeleteCompany(d:any){
    this.Api.companyDelete(d._id).subscribe((res:any)=>{
      window.location.reload()
     })
   }
}
