import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplyJobsComponent } from './view-apply-jobs.component';

describe('ViewApplyJobsComponent', () => {
  let component: ViewApplyJobsComponent;
  let fixture: ComponentFixture<ViewApplyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApplyJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApplyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
