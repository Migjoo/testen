import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungfindenComponent } from './buchungfinden.component';

describe('BuchungfindenComponent', () => {
  let component: BuchungfindenComponent;
  let fixture: ComponentFixture<BuchungfindenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchungfindenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungfindenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
