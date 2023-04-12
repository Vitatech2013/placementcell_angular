import { AdminService } from './Api/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{

  adminloginForm!:FormGroup
  admin: any;

  constructor(private fb:FormBuilder,private Routes:Router,private Api:AdminService){

  }
  ngOnInit(): void {
    this.adminloginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  Login(){
    let UserName = this.adminloginForm.get('username')?.value
    let Password = this.adminloginForm.get('password')?.value

    this.Api.getAdmin(UserName,Password).subscribe((res:any)=>{
      console.log(res,"check");
      this.admin = res;
      if(this.admin){
        localStorage.setItem('admin', JSON.stringify(res))
        this.Routes.navigate(['/Admin-Home'])
      }else{
        alert('Wrong Credentials')
      }
    })
  }
}
