import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguredashboardComponent } from './configuredashboard.component';

describe('ConfiguredashboardComponent', () => {
  let component: ConfiguredashboardComponent;
  let fixture: ComponentFixture<ConfiguredashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguredashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguredashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
