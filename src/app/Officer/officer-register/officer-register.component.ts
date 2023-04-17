import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from '../Api/officer.service';


@Component({
  selector: 'app-officer-register',
  templateUrl: './officer-register.component.html',
  styleUrls: ['./officer-register.component.scss']
})
export class OfficerRegisterComponent implements OnInit{

  RegForm!:FormGroup

  constructor(private fb:FormBuilder,private Routes:Router,private Api:OfficerService){

  }
  ngOnInit(): void {
    this.RegForm = this.fb.group({
      Name:['',[Validators.required]],
      Gender:['',[Validators.required]],
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]],
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
      Password: this.RegForm.get('Password')?.value,
      Mobileno: this.RegForm.get('Mobileno')?.value,
      City: this.RegForm.get('City')?.value,
      Address: this.RegForm.get('Address')?.value,
    }
    if(this.RegForm.valid){
      this.Api.AddOfficer(R).subscribe((res:any)=>{
        alert("Officer Added Successfully")
        this.Routes.navigate(['/Home/Officer-Login'])
      })
    }
  }

}
