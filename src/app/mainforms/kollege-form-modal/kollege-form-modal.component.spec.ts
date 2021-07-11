import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KollegeFormModalComponent } from './kollege-form-modal.component';

describe('PersonaFormModalComponent', () => {
  let component: KollegeFormModalComponent;
  let fixture: ComponentFixture<KollegeFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KollegeFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KollegeFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
