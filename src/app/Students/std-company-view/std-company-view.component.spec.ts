import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCompanyViewComponent } from './std-company-view.component';

describe('StdCompanyViewComponent', () => {
  let component: StdCompanyViewComponent;
  let fixture: ComponentFixture<StdCompanyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCompanyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
