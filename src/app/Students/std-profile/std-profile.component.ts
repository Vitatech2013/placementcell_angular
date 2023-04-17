import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../Api/student.service';

@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.scss']
})
export class StdProfileComponent {
    
  UpdateForm!:FormGroup
  Profile: any;

  constructor(private fb:FormBuilder,private Routes:Router,private Api:StudentService){

  }
  ngOnInit(): void {

    let StudentName= JSON.parse(localStorage.getItem('student')!).emailid
    
    this.UpdateForm = this.fb.group({
      studentname:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      gender:['',[Validators.required]],
      emailid:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]],
      collegename:['',[Validators.required]],
      education:['',[Validators.required]],
      branch:['',[Validators.required]],
      passyear:['',[Validators.required]],
      skills:['',[Validators.required]],
      extraskills:['',[Validators.required]],
    });
    this.Api.ViewProfile(StudentName).subscribe((res:any)=>{ 
      res.map((x:any)=>{
        this.Profile=x
      })
      this.UpdateForm.patchValue({
        studentname:this.Profile.studentname,
        mobile:this.Profile.mobile,
        gender:this.Profile.gender,
        emailid:this.Profile.emailid,
        password:this.Profile.password,
        dob:this.Profile.dob,
        address:this.Profile.address,
        collegename:this.Profile.collegename,
        education:this.Profile.education,
        branch:this.Profile.branch,
        passyear:this.Profile.passyear,
        skills:this.Profile.skills,
        extraskills:this.Profile.extraskills,
      }) 
    })


  }
  Update(){
    if(this.UpdateForm.valid){
      this.Api.UpdateProfile(this.Profile._id,this.UpdateForm.value).subscribe((res:any)=>{
        alert("Profile Updated Successfully")
        window.location.reload()
      })
    }

  }

}
