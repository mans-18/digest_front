import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceboardComponent } from './traceboard.component';

describe('TraceboardComponent', () => {
  let component: TraceboardComponent;
  let fixture: ComponentFixture<TraceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
