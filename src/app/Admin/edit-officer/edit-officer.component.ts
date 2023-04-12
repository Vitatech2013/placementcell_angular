import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin-login/Api/admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-officer',
  templateUrl: './edit-officer.component.html',
  styleUrls: ['./edit-officer.component.scss']
})
export class EditOfficerComponent implements OnInit{
  EditForm!:FormGroup

  constructor(private fb:FormBuilder,
              private Routes:Router,
              private Api:AdminService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditOfficerComponent>){

  }
  ngOnInit(): void {
    this.EditForm = this.fb.group({
      Name:['',[Validators.required]],
      Gender:['',[Validators.required]],
      EmailId:['',[Validators.required,Validators.email]],
      Mobileno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      City:['',[Validators.required]],
      Address:['',[Validators.required]],
    });
    this.EditForm.patchValue({
      Name:this.data.Name,
      Gender:this.data.Gender,
      EmailId:this.data.EmailId,
      Mobileno:this.data.Mobileno,
      City:this.data.City,
      Address:this.data.Address
    })

  }
  Edit(){
    const E ={
      Name: this.EditForm.get('Name')?.value,
      Gender: this.EditForm.get('Gender')?.value,
      EmailId: this.EditForm.get('EmailId')?.value,
      Mobileno: this.EditForm.get('Mobileno')?.value,
      City: this.EditForm.get('City')?.value,
      Address: this.EditForm.get('Address')?.value,
    }

    this.Api.EditOfficer(this.data._id,E).subscribe((res:any)=>{
      alert("Update successfully")
      window.location.reload()
      this.dialogRef.close()  
    },err=>{
      alert("Not Updated")
    })
    
  }

}
