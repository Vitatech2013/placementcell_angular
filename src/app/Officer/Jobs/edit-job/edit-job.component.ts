import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from '../../Api/officer.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent {
  UpdateForm!:FormGroup
  companyList: any;


  constructor(private Routes:Router,
              private Api:OfficerService,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditJobComponent>){}

  ngOnInit(): void {
    this.UpdateForm = this.fb.group({
      CompanyName:['',[Validators.required]],
      JobLocation:['',[Validators.required]],
      JobRole:['',[Validators.required]],
      Qualification:['',[Validators.required]],
      JobCategory:['',[Validators.required]],
      RequiredSkills:['',[Validators.required]],
      ApplylastDate:['',[Validators.required]],
    });
    this.Api.ViewCompany().subscribe((res:any)=>{
      this.companyList = res;
       })
       this.UpdateForm.patchValue({
        CompanyName:this.data.CompanyName,
        JobLocation:this.data.JobLocation,
        JobRole:this.data.JobRole,
        Qualification:this.data.Qualification,
        JobCategory:this.data.JobCategory,
        RequiredSkills:this.data.RequiredSkills,
        ApplylastDate:this.data.ApplylastDate,
      })
  }
  Edit(){
    const C = {
      CompanyName:this.UpdateForm.get('CompanyName')?.value,
      JobLocation:this.UpdateForm.get('JobLocation')?.value,
      JobRole:this.UpdateForm.get('JobRole')?.value,
      Qualification:this.UpdateForm.get('Qualification')?.value,
      JobCategory:this.UpdateForm.get('JobCategory')?.value,
      RequiredSkills:this.UpdateForm.get('RequiredSkills')?.value,
      ApplylastDate:this.UpdateForm.get('ApplylastDate')?.value,
    }
    if(this.UpdateForm.valid){
      this.Api.EditJobs(this.data._id,C).subscribe((res:any)=>{
        alert("Updated Successfully")
        window.location.reload()
      })
    }

  }

}
