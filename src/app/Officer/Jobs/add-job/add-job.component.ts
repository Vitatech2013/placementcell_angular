import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from '../../Api/officer.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit{
  AddForm!:FormGroup
  companyList: any;


  constructor(private Routes:Router,private Api:OfficerService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.AddForm = this.fb.group({
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
  }
  Add(){
    const C = {
      CompanyName:this.AddForm.get('CompanyName')?.value,
      JobLocation:this.AddForm.get('JobLocation')?.value,
      JobRole:this.AddForm.get('JobRole')?.value,
      Qualification:this.AddForm.get('Qualification')?.value,
      JobCategory:this.AddForm.get('JobCategory')?.value,
      RequiredSkills:this.AddForm.get('RequiredSkills')?.value,
      ApplylastDate:this.AddForm.get('ApplylastDate')?.value,
    }
    if(this.AddForm.valid){
      this.Api.AddJobs(C).subscribe((res:any)=>{
        alert("Company Added Successfully")
        window.location.reload()
      })
    }

  }


}
