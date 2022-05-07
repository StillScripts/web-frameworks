import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoopingComponent } from './list-looping.component';

describe('ListLoopingComponent', () => {
  let component: ListLoopingComponent;
  let fixture: ComponentFixture<ListLoopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLoopingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
