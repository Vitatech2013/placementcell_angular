import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProfileComponent } from './std-profile.component';

describe('StdProfileComponent', () => {
  let component: StdProfileComponent;
  let fixture: ComponentFixture<StdProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
