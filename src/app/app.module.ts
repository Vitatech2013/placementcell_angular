
import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHomeComponent } from './Home/main-home/main-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { OfficerLoginComponent } from './Officer/officer-login/officer-login.component';
import { StdLoginComponent } from './Students/std-login/std-login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { OfficerPageComponent } from './Officer/officer-page/officer-page.component';
import { StudentPageComponent } from './Students/student-page/student-page.component';
import { AddOfficerComponent } from './Admin/add-officer/add-officer.component';
import { ViewOfficerComponent } from './Admin/view-officer/view-officer.component';
import { AddStudentsComponent } from './Admin/add-students/add-students.component';
import { ViewStudentsComponent } from './Admin/view-students/view-students.component';
import { ViewCompanysComponent } from './Admin/view-companys/view-companys.component';
import { ViewJobsComponent } from './Admin/view-jobs/view-jobs.component';
import { ViewApplyJobsComponent } from './Admin/view-apply-jobs/view-apply-jobs.component';
import { AdminChgePwdComponent } from './Admin/admin-chge-pwd/admin-chge-pwd.component';
import { EditOfficerComponent } from './Admin/edit-officer/edit-officer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    AdminLoginComponent,
    OfficerLoginComponent,
    StdLoginComponent,
    AdminPageComponent,
    OfficerPageComponent,
    StudentPageComponent,
    AddOfficerComponent,
    ViewOfficerComponent,
    AddStudentsComponent,
    ViewStudentsComponent,
    ViewCompanysComponent,
    ViewJobsComponent,
    ViewApplyJobsComponent,
    AdminChgePwdComponent,
    EditOfficerComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
