import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KollegeComponent } from './kollege.component';

describe('KollegeComponent', () => {
  let component: KollegeComponent;
  let fixture: ComponentFixture<KollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
