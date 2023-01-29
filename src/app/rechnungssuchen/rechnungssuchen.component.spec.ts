import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnungssuchenComponent } from './rechnungssuchen.component';

describe('RechnungssuchenComponent', () => {
  let component: RechnungssuchenComponent;
  let fixture: ComponentFixture<RechnungssuchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnungssuchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechnungssuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
