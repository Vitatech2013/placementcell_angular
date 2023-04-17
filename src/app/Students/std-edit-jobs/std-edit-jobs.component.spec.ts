import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdEditJobsComponent } from './std-edit-jobs.component';

describe('StdEditJobsComponent', () => {
  let component: StdEditJobsComponent;
  let fixture: ComponentFixture<StdEditJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdEditJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdEditJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
