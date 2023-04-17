import { Component } from '@angular/core';
import { AdminService } from '../admin-login/Api/admin.service';

@Component({
  selector: 'app-view-companys',
  templateUrl: './view-companys.component.html',
  styleUrls: ['./view-companys.component.scss']
})
export class ViewCompanysComponent {
  Company:any;
  constructor(private Api:AdminService){}

  ngOnInit(): void {
    this.Api.ViewCompany().subscribe((res:any)=>{
      this.Company = res;
    })
  }


}
