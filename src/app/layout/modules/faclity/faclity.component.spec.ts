import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaclityComponent } from './faclity.component';

describe('FaclityComponent', () => {
  let component: FaclityComponent;
  let fixture: ComponentFixture<FaclityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaclityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaclityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
