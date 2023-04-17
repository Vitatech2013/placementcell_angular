import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngOfficerPedComponent } from './chng-officer-ped.component';

describe('ChngOfficerPedComponent', () => {
  let component: ChngOfficerPedComponent;
  let fixture: ComponentFixture<ChngOfficerPedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChngOfficerPedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChngOfficerPedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
