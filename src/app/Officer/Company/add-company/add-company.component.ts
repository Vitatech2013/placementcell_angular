import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from '../../Api/officer.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  AddForm!:FormGroup


  constructor(private Routes:Router,private Api:OfficerService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      CompanyName:['',[Validators.required]],
      Phoneno:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      CompanyType:['',[Validators.required]],
      Emailid:['',[Validators.required,Validators.email]],
      Address:['',[Validators.required]],
      City:['',[Validators.required]],
      State:['',[Validators.required]],
      Branch:['',[Validators.required]],
      CompanyWebsite:['',[Validators.required]],


    })
  }
  Add(){
    const C = {
      CompanyName:this.AddForm.get('CompanyName')?.value,
      Phoneno:this.AddForm.get('Phoneno')?.value,
      CompanyType:this.AddForm.get('CompanyType')?.value,
      Emailid:this.AddForm.get('Emailid')?.value,
      Address:this.AddForm.get('Address')?.value,
      City:this.AddForm.get('City')?.value,
      State:this.AddForm.get('State')?.value,
      Branch:this.AddForm.get('Branch')?.value,
      CompanyWebsite:this.AddForm.get('CompanyWebsite')?.value,
    }
    if(this.AddForm.valid){
      this.Api.AddCompany(C).subscribe((res:any)=>{
        alert("Company Added Successfully")
        window.location.reload()
      })
    }

  }

}
