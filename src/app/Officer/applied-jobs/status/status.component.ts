import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from '../../Api/officer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{
  Status!:FormGroup

  constructor(private fb:FormBuilder,
    private Routes:Router,
    private Api:OfficerService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef:MatDialogRef<StatusComponent>){

}
  
  ngOnInit(): void {
    this.Status = this.fb.group({
      name:['',[Validators.required]],
      companyname:['',[Validators.required]],
      jobcategory:['',[Validators.required]],
      status:['',[Validators.required]],
      remarks:['',[Validators.required]],
    });
    this.Status.patchValue({
      name:this.data.name,
      companyname:this.data.companyname,
      jobcategory:this.data.jobcategory,
      status:this.data.status,
      remarks:this.data.remarks
    })

  }
  Send(){
      const S ={
        name:this.Status.get('name')?.value,
        companyname:this.Status.get('companyname')?.value,
        jobcategory:this.Status.get('jobcategory')?.value,
        status:this.Status.get('status')?.value,
        remarks:this.Status.get('remarks')?.value,

      }
      this.Api.Status(this.data._id,S).subscribe((res:any)=>{
        alert("Update successfully")
        window.location.reload()
        this.dialogRef.close()  
      },err=>{
        alert("Not Updated")
      })

  }
}
