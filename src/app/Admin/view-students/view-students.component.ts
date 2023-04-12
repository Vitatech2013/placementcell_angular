import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-login/Api/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit{

  students:any;
  
  constructor(private Api:AdminService,private Routes:Router){}

  ngOnInit(): void {
    this.Api.getStd().subscribe((res:any)=>{
      this.students = res;
    })
  }
}
