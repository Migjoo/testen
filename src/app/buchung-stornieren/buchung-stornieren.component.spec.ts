import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungStornierenComponent } from './buchung-stornieren.component';

describe('BuchungStornierenComponent', () => {
  let component: BuchungStornierenComponent;
  let fixture: ComponentFixture<BuchungStornierenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchungStornierenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungStornierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
