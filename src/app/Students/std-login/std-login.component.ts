import { StudentService } from './../Api/student.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-std-login',
  templateUrl: './std-login.component.html',
  styleUrls: ['./std-login.component.scss']
})
export class StdLoginComponent implements OnInit{

  StdloginForm!:FormGroup;
  Student: any;
  constructor(private Routes:Router,private fb:FormBuilder,private Api:StudentService){}

  ngOnInit(): void {
  this.StdloginForm = this.fb.group({
    emailid:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  }
  Login(){
    let Email =  this.StdloginForm.get('emailid')?.value
    let Password = this.StdloginForm.get('password')?.value

    this.Api.getStud(Email,Password).subscribe((res:any)=>{
      this.Student = res;
      if(this.Student){
        localStorage.setItem('student', JSON.stringify(res))
        this.Routes.navigate(['/Student-Home'])
      }else{
        alert("Wrong Credentials")
      }
    })
  }

}
