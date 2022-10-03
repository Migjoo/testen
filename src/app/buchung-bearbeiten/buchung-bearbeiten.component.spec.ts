import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungBearbeitenComponent } from './buchung-bearbeiten.component';

describe('BuchungBearbeitenComponent', () => {
  let component: BuchungBearbeitenComponent;
  let fixture: ComponentFixture<BuchungBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchungBearbeitenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
