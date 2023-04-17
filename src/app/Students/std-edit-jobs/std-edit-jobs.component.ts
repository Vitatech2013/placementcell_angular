import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../Api/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-std-edit-jobs',
  templateUrl: './std-edit-jobs.component.html',
  styleUrls: ['./std-edit-jobs.component.scss']
})
export class StdEditJobsComponent {

  EditForm!:FormGroup
  url:any;

  constructor(private fb:FormBuilder,
              private Routes:Router,
              private Api:StudentService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<StdEditJobsComponent>){}

  ngOnInit(): void {
    this.EditForm = this.fb.group({
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

    });
    this.EditForm.patchValue({
      name:this.data.name,
      phone:this.data.phone,
      emailid:this.data.emailid,
      dob:this.data.dob,
      ssc:this.data.ssc,
      inter:this.data.inter,
      qualification:this.data.qualification,
      companyname:this.data.companyname,
      jobcategory:this.data.jobcategory,
      requiredskills:this.data.requiredskills,
      address:this.data.address,

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
  Edit(){
    const J = {
      name: this.EditForm.get('name')?.value,
      phone: this.EditForm.get('phone')?.value,
      emailid: this.EditForm.get('emailid')?.value,
      dob: this.EditForm.get('dob')?.value,
      ssc: this.EditForm.get('ssc')?.value,
      inter: this.EditForm.get('inter')?.value,
      qualification: this.EditForm.get('qualification')?.value,
      companyname: this.EditForm.get('companyname')?.value,
      jobcategory: this.EditForm.get('jobcategory')?.value,
      requiredskills: this.EditForm.get('requiredskills')?.value,
      address: this.EditForm.get('address')?.value,
      resume: this.EditForm.get('resume')?.value,
      status:"Pending",
      remarks : "a"

    }
    if(this.EditForm.valid){
      this.Api.UpdateApplyJobs(this.data._id,J).subscribe((res:any)=>{
        console.log(res,"check");
        
        alert("Updated Successfully")
        window.location.reload()
      })
    }
  }

}
