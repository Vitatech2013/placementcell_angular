import { Component } from '@angular/core';
import { StudentService } from '../Api/student.service';

@Component({
  selector: 'app-std-company-view',
  templateUrl: './std-company-view.component.html',
  styleUrls: ['./std-company-view.component.scss']
})
export class StdCompanyViewComponent {
  ViewCompany:any

  constructor(private Api:StudentService){}

  ngOnInit(): void {
    this.Api.ViewCompany().subscribe((res:any)=>{
      this.ViewCompany = res;
    })

  }

}
