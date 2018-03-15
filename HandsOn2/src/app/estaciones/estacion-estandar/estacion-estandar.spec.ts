import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPinillaComponent } from './la-pinilla.component';

describe('LaPinillaComponent', () => {
  let component: LaPinillaComponent;
  let fixture: ComponentFixture<LaPinillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaPinillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPinillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
