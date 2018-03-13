import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdesquiComponent } from './valdesqui.component';

describe('ValdesquiComponent', () => {
  let component: ValdesquiComponent;
  let fixture: ComponentFixture<ValdesquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValdesquiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValdesquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
