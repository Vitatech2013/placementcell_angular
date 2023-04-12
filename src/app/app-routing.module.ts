import { AdminChgePwdComponent } from './Admin/admin-chge-pwd/admin-chge-pwd.component';
import { ViewApplyJobsComponent } from './Admin/view-apply-jobs/view-apply-jobs.component';
import { ViewJobsComponent } from './Admin/view-jobs/view-jobs.component';
import { ViewCompanysComponent } from './Admin/view-companys/view-companys.component';
import { ViewStudentsComponent } from './Admin/view-students/view-students.component';
import { ViewOfficerComponent } from './Admin/view-officer/view-officer.component';
import { AddStudentsComponent } from './Admin/add-students/add-students.component';
import { AddOfficerComponent } from './Admin/add-officer/add-officer.component';
import { StudentPageComponent } from './Students/student-page/student-page.component';
import { OfficerPageComponent } from './Officer/officer-page/officer-page.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { StdLoginComponent } from './Students/std-login/std-login.component';
import { OfficerLoginComponent } from './Officer/officer-login/officer-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { MainHomeComponent } from './Home/main-home/main-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:MainHomeComponent,children:[
    {path:'Admin-Login',component:AdminLoginComponent},
    {path:'Officer-Login',component:OfficerLoginComponent},
    {path:'Student-login',component:StdLoginComponent}
  ]},
  {path:'Admin-Home',component:AdminPageComponent,children:[
    {path:'',redirectTo:'Add-Officer',pathMatch:'full'},
    {path:'Add-Officer',component:AddOfficerComponent},
    {path:'Add-Students',component:AddStudentsComponent},
    {path:'View-Officers',component:ViewOfficerComponent},
    {path:'View-Students',component:ViewStudentsComponent},
    {path:'View-Companys',component:ViewCompanysComponent},
    {path:'View-Jobs',component:ViewJobsComponent},
    {path:'View-ApplyJobs',component:ViewApplyJobsComponent},
    {path:'ChangePassword',component:AdminChgePwdComponent}
  ]},
  {path:'Officer-Home',component:OfficerPageComponent},
  {path:'Student-Home',component:StudentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
