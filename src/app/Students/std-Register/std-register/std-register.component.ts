import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Admin/admin-login/Api/admin.service';

@Component({
  selector: 'app-std-register',
  templateUrl: './std-register.component.html',
  styleUrls: ['./std-register.component.scss']
})
export class StdRegisterComponent {
  StdReg!:FormGroup


  constructor(private Routes:Router,private Api:AdminService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.StdReg = this.fb.group({
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

    })
  }
  Reg(){
    const S = {
      studentname:this.StdReg.get('studentname')?.value,
      mobile:this.StdReg.get('mobile')?.value,
      gender:this.StdReg.get('gender')?.value,
      emailid:this.StdReg.get('emailid')?.value,
      password:this.StdReg.get('password')?.value,
      dob:this.StdReg.get('dob')?.value,
      address:this.StdReg.get('address')?.value,
      collegename:this.StdReg.get('collegename')?.value,
      education:this.StdReg.get('education')?.value,
      branch:this.StdReg.get('branch')?.value,
      passyear:this.StdReg.get('passyear')?.value,
      skills:this.StdReg.get('skills')?.value,
      extraskills:this.StdReg.get('extraskills')?.value,
    }
    if(this.StdReg.valid){
      this.Api.AddStd(S).subscribe((res:any)=>{
        alert("Student Added Successfully")
        window.location.reload()
      })
    }

  }


}
