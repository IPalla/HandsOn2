import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertoNavacerradaComponent } from './puerto-navacerrada.component';

describe('PuertoNavacerradaComponent', () => {
  let component: PuertoNavacerradaComponent;
  let fixture: ComponentFixture<PuertoNavacerradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuertoNavacerradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuertoNavacerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
