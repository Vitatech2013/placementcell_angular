import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplyJobComponent } from './update-apply-job.component';

describe('UpdateApplyJobComponent', () => {
  let component: UpdateApplyJobComponent;
  let fixture: ComponentFixture<UpdateApplyJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApplyJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateApplyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
