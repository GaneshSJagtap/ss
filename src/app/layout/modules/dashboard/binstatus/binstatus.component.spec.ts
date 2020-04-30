import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinstatusComponent } from './binstatus.component';

describe('BinstatusComponent', () => {
  let component: BinstatusComponent;
  let fixture: ComponentFixture<BinstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
