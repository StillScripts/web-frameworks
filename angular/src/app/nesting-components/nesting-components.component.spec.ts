import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingComponentsComponent } from './nesting-components.component';

describe('NestingComponentsComponent', () => {
  let component: NestingComponentsComponent;
  let fixture: ComponentFixture<NestingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestingComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
