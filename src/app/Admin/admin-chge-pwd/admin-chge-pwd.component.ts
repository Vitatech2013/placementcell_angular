import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin-login/Api/admin.service';

@Component({
  selector: 'app-admin-chge-pwd',
  templateUrl: './admin-chge-pwd.component.html',
  styleUrls: ['./admin-chge-pwd.component.scss']
})
export class AdminChgePwdComponent implements OnInit{
  changeForm:any;
  AName: any;
  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService){}
  

  ngOnInit(): void {
    this.AName= JSON.parse(localStorage.getItem('admin')!)

    this.changeForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      newpassword:['',[Validators.required]]
    });
    this.changeForm.patchValue({
      username:this.AName.username
    })

  }
  change(){
    let Password = this.changeForm.get('password')?.value
    let nPwd = this.changeForm.get('newpassword')?.value

    console.log(Password,nPwd,"check");

    if(this.AName.password == Password){
      let newData = {
        username : this.AName.username,
        password : nPwd
      }
      this.Api.ChngPwd(this.AName._id,newData).subscribe((res:any)=>{
        alert('Password was Updated Successfully')
      })
    }else{
      alert('Password & new Password not matched')
    }
    }
    
  }





