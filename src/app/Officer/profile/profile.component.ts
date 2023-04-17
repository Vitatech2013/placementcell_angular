import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from '../Api/officer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
  UpdateForm!:FormGroup
  Profile: any;

  constructor(private fb:FormBuilder,private Routes:Router,private Api:OfficerService){

  }
  ngOnInit(): void {

    let OfficerName:any= JSON.parse(localStorage.getItem('officer')!).Name
    console.log( OfficerName,"ls");
    

    this.UpdateForm = this.fb.group({
      Name:['',[Validators.required]],
      Gender:['',[Validators.required]],
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]],
      Mobileno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      City:['',[Validators.required]],
      Address:['',[Validators.required]],
    });
    this.Api.ViewOfficer(OfficerName).subscribe((res:any)=>{
      res.map((x:any)=>{
        this.Profile=x
      })
      this.UpdateForm.patchValue({
        Name:this.Profile.Name,
        Gender:this.Profile.Gender,
        EmailId:this.Profile.EmailId,
        Password:this.Profile.Password,
        Mobileno:this.Profile.Mobileno,
        City:this.Profile.City,
        Address:this.Profile.Address,
      }) 
    })


  }
  Update(){
    if(this.UpdateForm.valid){
      this.Api.EditOfficer(this.Profile._id,this.UpdateForm.value).subscribe((res:any)=>{
        alert("Profile Updated Successfully")
        window.location.reload()
      })
    }

  }
}
