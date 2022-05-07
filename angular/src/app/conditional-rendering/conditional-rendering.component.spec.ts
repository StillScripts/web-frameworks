import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalRenderingComponent } from './conditional-rendering.component';

describe('ConditionalRenderingComponent', () => {
  let component: ConditionalRenderingComponent;
  let fixture: ComponentFixture<ConditionalRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
