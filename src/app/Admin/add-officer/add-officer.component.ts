import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin-login/Api/admin.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.scss']
})
export class AddOfficerComponent implements OnInit {
  RegForm!:FormGroup

  constructor(private fb:FormBuilder,private Routes:Router,private Api:AdminService){

  }
  ngOnInit(): void {
    this.RegForm = this.fb.group({
      Name:['',[Validators.required]],
      Gender:['',[Validators.required]],
      EmailId:['',[Validators.required,Validators.email]],
      Mobileno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      City:['',[Validators.required]],
      Address:['',[Validators.required]],
    });

  }
  Reg(){
    const R ={
      Name: this.RegForm.get('Name')?.value,
      Gender: this.RegForm.get('Gender')?.value,
      EmailId: this.RegForm.get('EmailId')?.value,
      Mobileno: this.RegForm.get('Mobileno')?.value,
      City: this.RegForm.get('City')?.value,
      Address: this.RegForm.get('Address')?.value,
    }
    if(this.RegForm.valid){
      this.Api.AddOfficer(R).subscribe((res:any)=>{
        alert("Officer Added Successfully")
        window.location.reload()
      })
    }
  }

}
