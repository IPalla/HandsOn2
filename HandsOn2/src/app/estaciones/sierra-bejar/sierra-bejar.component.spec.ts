import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SierraBejarComponent } from './sierra-bejar.component';

describe('SierraBejarComponent', () => {
  let component: SierraBejarComponent;
  let fixture: ComponentFixture<SierraBejarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SierraBejarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SierraBejarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
