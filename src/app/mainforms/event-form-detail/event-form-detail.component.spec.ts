import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormDetailComponent } from './event-form-detail.component';

describe('EventFormDetailComponent', () => {
  let component: EventFormDetailComponent;
  let fixture: ComponentFixture<EventFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
