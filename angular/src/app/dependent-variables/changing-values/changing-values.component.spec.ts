import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingValuesComponent } from './changing-values.component';

describe('ChangingValuesComponent', () => {
  let component: ChangingValuesComponent;
  let fixture: ComponentFixture<ChangingValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangingValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
