import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalKeyboardComponent } from './mechanical-keyboard.component';

describe('MechanicalKeyboardComponent', () => {
  let component: MechanicalKeyboardComponent;
  let fixture: ComponentFixture<MechanicalKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicalKeyboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicalKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
