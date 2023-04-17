import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OfficerService } from '../Api/officer.service';

@Component({
  selector: 'app-chng-officer-ped',
  templateUrl: './chng-officer-ped.component.html',
  styleUrls: ['./chng-officer-ped.component.scss']
})
export class ChngOfficerPedComponent {

  changeForm:any;
  dName:any;

  constructor(private fb:FormBuilder,private Api:OfficerService){}
  ngOnInit(): void {

    this.dName= JSON.parse(localStorage.getItem('officer')!)

    this.changeForm = this.fb.group({
      Name:['',[Validators.required]],
      Password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
      newpassword:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
    });
    this.changeForm.patchValue({
      Name: this.dName.Name
    })
  }

  change(){
    let Pwd = this.changeForm.get('Password')?.value
    let nPwd = this.changeForm.get('newpassword')?.value

    console.log(Pwd,nPwd,"check values");
    
console.log(this.dName.Password, Pwd);
    if(this.dName.Password == Pwd){
      let newData = {
        Name:this.dName.Name,
        Password:nPwd,

      }
         this.Api.ChngPwd(this.dName._id,newData).subscribe((res:any)=>{
         console.log(res,"check");
         alert('Password was Updated Successfully')
       })
    }else{
      alert('Password & new Password not matched')
    }
  }

}
