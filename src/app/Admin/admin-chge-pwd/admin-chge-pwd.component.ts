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
  dName:any;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService){}
  ngOnInit(): void {

    this.dName= JSON.parse(localStorage.getItem('admin')!)

    this.changeForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
      newpassword:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
    });
    console.log(this.dName,"dname");
    
    this.changeForm.patchValue({
      username: this.dName.username
    })
  }

  change(){
    let Password = this.changeForm.get('password')?.value
    let nPwd = this.changeForm.get('newpassword')?.value

    console.log(Password,nPwd,"check values");
    
console.log(this.dName.password, Password);
    if(this.dName.password == Password){
      let newData = {
        username:this.dName.username,
        password:nPwd,

      }
         this.Api.ChngPwd(this.dName._id,newData).subscribe((res:any)=>{
         console.log(res,"check");
         alert('Password was Updated Successfully')
       })
    }else{
      alert('Password & new Password not matched')
    }
  }



}
