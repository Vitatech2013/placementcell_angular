import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdViewJobsComponent } from './std-view-jobs.component';

describe('StdViewJobsComponent', () => {
  let component: StdViewJobsComponent;
  let fixture: ComponentFixture<StdViewJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdViewJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdViewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
