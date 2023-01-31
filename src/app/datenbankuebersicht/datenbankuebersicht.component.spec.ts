import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenbankuebersichtComponent } from './datenbankuebersicht.component';

describe('DatenbankuebersichtComponent', () => {
  let component: DatenbankuebersichtComponent;
  let fixture: ComponentFixture<DatenbankuebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenbankuebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenbankuebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
