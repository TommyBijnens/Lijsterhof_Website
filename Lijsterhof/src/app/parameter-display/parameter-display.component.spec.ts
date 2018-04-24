import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterDisplayComponent } from './parameter-display.component';

describe('ParameterDisplayComponent', () => {
  let component: ParameterDisplayComponent;
  let fixture: ComponentFixture<ParameterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
