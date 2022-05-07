import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentVariablesComponent } from './dependent-variables.component';

describe('DependentVariablesComponent', () => {
  let component: DependentVariablesComponent;
  let fixture: ComponentFixture<DependentVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
