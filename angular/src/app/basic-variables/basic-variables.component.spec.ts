import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVariablesComponent } from './basic-variables.component';

describe('BasicVariablesComponent', () => {
  let component: BasicVariablesComponent;
  let fixture: ComponentFixture<BasicVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
