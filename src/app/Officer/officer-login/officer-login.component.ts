import { OfficerService } from './../Api/officer.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.scss']
})
export class OfficerLoginComponent implements OnInit{
  OfficerloginForm!:FormGroup
  Officer: any;

  constructor(private Routes:Router,private Api:OfficerService,private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.OfficerloginForm = this.fb.group({
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]]
    })
  }
  Login(){
    let Email = this.OfficerloginForm.get('EmailId')?.value
    let Pwd = this.OfficerloginForm.get('Password')?.value

      this.Api.getOfficer(Email,Pwd).subscribe((res:any)=>{
        this.Officer = res;
        console.log(res);
        
        if(res){
        localStorage.setItem('officer', JSON.stringify(res))
         this.Routes.navigate(['/Officer-Home'])
        }else{
          alert("Wrong Credentials")
        }
      })
  }
}
