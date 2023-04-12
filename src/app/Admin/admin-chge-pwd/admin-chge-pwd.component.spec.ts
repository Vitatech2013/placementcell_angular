import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChgePwdComponent } from './admin-chge-pwd.component';

describe('AdminChgePwdComponent', () => {
  let component: AdminChgePwdComponent;
  let fixture: ComponentFixture<AdminChgePwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChgePwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChgePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
