import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserSetupComponent } from './add-user-setup.component';

describe('AddUserSetupComponent', () => {
  let component: AddUserSetupComponent;
  let fixture: ComponentFixture<AddUserSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
