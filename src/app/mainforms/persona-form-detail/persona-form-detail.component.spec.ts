import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFormDetailComponent } from './persona-form-detail.component';

describe('PersonaFormDetailComponent', () => {
  let component: PersonaFormDetailComponent;
  let fixture: ComponentFixture<PersonaFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
