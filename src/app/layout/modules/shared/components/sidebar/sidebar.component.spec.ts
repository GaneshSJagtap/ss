import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdiebarComponent } from './sidebar.component';

describe('SdiebarComponent', () => {
  let component: SdiebarComponent;
  let fixture: ComponentFixture<SdiebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdiebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdiebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
