import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveGrTextboxComponent } from './eve-gr-textbox.component';

describe('EveGrTextboxComponent', () => {
  let component: EveGrTextboxComponent;
  let fixture: ComponentFixture<EveGrTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveGrTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveGrTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
