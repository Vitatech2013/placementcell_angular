import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../Api/student.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit{
  ApplyForm!:FormGroup
  url:any;

  constructor(private fb:FormBuilder,private Routes:Router,private Api:StudentService){}

  ngOnInit(): void {
    this.ApplyForm = this.fb.group({
      name:['',[Validators.required]],
      phone:['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      emailid:['',[Validators.required,Validators.email]],
      dob:['',[Validators.required]],
      ssc:['',[Validators.required]],
      inter:['',[Validators.required]],
      qualification:['',[Validators.required]],
      companyname:['',[Validators.required]],
      jobcategory:['',[Validators.required]],
      requiredskills:['',[Validators.required]],
      address:['',[Validators.required]],
      resume:['',[Validators.required]],


    })

  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result;
      }
    }
  }
  Apply(){
    const J = {
      name: this.ApplyForm.get('name')?.value,
      phone: this.ApplyForm.get('phone')?.value,
      emailid: this.ApplyForm.get('emailid')?.value,
      dob: this.ApplyForm.get('dob')?.value,
      ssc: this.ApplyForm.get('ssc')?.value,
      inter: this.ApplyForm.get('inter')?.value,
      qualification: this.ApplyForm.get('qualification')?.value,
      companyname: this.ApplyForm.get('companyname')?.value,
      jobcategory: this.ApplyForm.get('jobcategory')?.value,
      requiredskills: this.ApplyForm.get('requiredskills')?.value,
      address: this.ApplyForm.get('address')?.value,
      resume:this.url,
      status:"Pending",
      remarks : "a"

    }
    if(this.ApplyForm.valid){
      this.Api.ApplyJob(J).subscribe((res:any)=>{
        console.log(res,"check");
        
        alert("Job Added Successfully")
        window.location.reload()
      })
    }
  }

}
