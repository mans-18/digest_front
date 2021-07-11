import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExComponent } from './modalEx.component';

describe('HometreeComponent', () => {
  let component: ModalExComponent;
  let fixture: ComponentFixture<ModalExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
