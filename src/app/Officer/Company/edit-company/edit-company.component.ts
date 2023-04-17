import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OfficerService } from '../../Api/officer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent {
  UpdateForm!:FormGroup
  companyList: any;


  constructor(private Routes:Router,
              private Api:OfficerService,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditCompanyComponent>){}

  ngOnInit(): void {
    this.UpdateForm = this.fb.group({
      CompanyName:['',[Validators.required]],
      CompanyType:['',[Validators.required]],
      Phoneno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      Emailid:['',[Validators.required,Validators.email]],
      Address:['',[Validators.required]],
      City:['',[Validators.required]],
      State:['',[Validators.required]],
      Branch:['',[Validators.required]],
      CompanyWebsite:['',[Validators.required]],

    });
    this.Api.ViewCompany().subscribe((res:any)=>{
      this.companyList = res;
       })
       this.UpdateForm.patchValue({
        CompanyName:this.data.CompanyName,
        CompanyType:this.data.CompanyType,
        Phoneno:this.data.Phoneno,
        Emailid:this.data.Emailid,
        Address:this.data.Address,
        City:this.data.City,
        State:this.data.State,
        Branch:this.data.Branch,
        CompanyWebsite:this.data.CompanyWebsite,

      })
  }
  Edit(){
    const C = {
      CompanyName:this.UpdateForm.get('CompanyName')?.value,
      CompanyType:this.UpdateForm.get('CompanyType')?.value,
      Phoneno:this.UpdateForm.get('Phoneno')?.value,
      Emailid:this.UpdateForm.get('Emailid')?.value,
      Address:this.UpdateForm.get('Address')?.value,
      City:this.UpdateForm.get('City')?.value,
      State:this.UpdateForm.get('State')?.value,
      Branch:this.UpdateForm.get('Branch')?.value,
      CompanyWebsite:this.UpdateForm.get('CompanyWebsite')?.value,

    }
    if(this.UpdateForm.valid){
      this.Api.EditCompany(this.data._id,C).subscribe((res:any)=>{
        alert("Updated Successfully")
        window.location.reload()
      })
    }

  }

}
