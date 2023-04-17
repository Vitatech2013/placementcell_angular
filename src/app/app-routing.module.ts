import { JobViewComponent } from './Students/job-view/job-view.component';
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
import { OfficerRegisterComponent } from './Officer/officer-register/officer-register.component';
import { ProfileComponent } from './Officer/profile/profile.component';
import { AddCompanyComponent } from './Officer/Company/add-company/add-company.component';
import { EditCompanyComponent } from './Officer/Company/edit-company/edit-company.component';
import { AddJobComponent } from './Officer/Jobs/add-job/add-job.component';
import { EditJobComponent } from './Officer/Jobs/edit-job/edit-job.component';
import { ChngOfficerPedComponent } from './Officer/chng-officer-ped/chng-officer-ped.component';
import { AppliedJobsComponent } from './Officer/applied-jobs/applied-jobs.component';
import { ViewCompanyComponent } from './Officer/Company/view-company/view-company.component';
import { ViewJobComponent } from './Officer/Jobs/view-job/view-job.component';
import { StatusComponent } from './Officer/applied-jobs/status/status.component';
import { StdProfileComponent } from './Students/std-profile/std-profile.component';
import { StdRegisterComponent } from './Students/std-Register/std-register/std-register.component';
import { StdCompanyViewComponent } from './Students/std-company-view/std-company-view.component';
import { JobApplyComponent } from './Students/job-apply/job-apply.component';
import { StdViewJobsComponent } from './Students/std-view-jobs/std-view-jobs.component';
import { UpdateApplyJobComponent } from './Students/update-apply-job/update-apply-job.component';
import { StdEditJobsComponent } from './Students/std-edit-jobs/std-edit-jobs.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:MainHomeComponent,children:[
    {path:'Admin-Login',component:AdminLoginComponent},
    {path:'Officer-Login',component:OfficerLoginComponent},
    {path:'Officer-Register',component:OfficerRegisterComponent},
    {path:'Student-login',component:StdLoginComponent},
    {path:'Student-Register',component:StdRegisterComponent}
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
  {path:'Officer-Home',component:OfficerPageComponent,children:[
    {path:'',redirectTo:'Officer-Profile',pathMatch:'full'},
    {path:'Officer-Profile',component:ProfileComponent},
    {path:'Add-Company',component:AddCompanyComponent},
    {path:'Edit-Company',component:EditCompanyComponent},
    {path:'View-Company',component:ViewCompanyComponent},
    {path:'Add-Job',component:AddJobComponent},
    {path:'View-Job',component:ViewJobComponent},
    {path:'Edit-Job',component:EditJobComponent},
    {path:'View-ApplyJobs',component:AppliedJobsComponent},
    {path:'View-Status',component:StatusComponent},
    {path:'ChangePassword',component:ChngOfficerPedComponent}
  ]},
  {path:'Student-Home',component:StudentPageComponent,children:[
    {path:'',redirectTo:'Std-Profile',pathMatch:'full'},
    {path:'Std-Profile',component:StdProfileComponent},
    {path:'Std-Company',component:StdCompanyViewComponent},
    {path:'Std-Jobs',component:JobViewComponent},
    {path:'Std-ApplyJob',component:JobApplyComponent},
    {path:'Std-ViewJob',component:StdViewJobsComponent},
    {path:'Std-EditJob',component:StdEditJobsComponent},
    {path:'Std-UpdateJob',component:UpdateApplyJobComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
