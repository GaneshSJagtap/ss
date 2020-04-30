import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPulseSetupComponent } from './add-pulse-setup.component';

describe('AddPulseSetupComponent', () => {
  let component: AddPulseSetupComponent;
  let fixture: ComponentFixture<AddPulseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPulseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPulseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
