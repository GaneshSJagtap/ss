import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BincountComponent } from "./bincount.component";

describe("BincountComponent", () => {
  let component: BincountComponent;
  let fixture: ComponentFixture<BincountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BincountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BincountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
