import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFormModalComponent } from './persona-form-modal.component';

describe('PersonaFormModalComponent', () => {
  let component: PersonaFormModalComponent;
  let fixture: ComponentFixture<PersonaFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
