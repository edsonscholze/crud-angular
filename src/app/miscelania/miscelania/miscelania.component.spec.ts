import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscelaniaComponent } from './miscelania.component';

describe('MiscelaniaComponent', () => {
  let component: MiscelaniaComponent;
  let fixture: ComponentFixture<MiscelaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscelaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscelaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
