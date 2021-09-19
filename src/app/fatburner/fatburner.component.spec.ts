import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatburnerComponent } from './fatburner.component';

describe('FatburnerComponent', () => {
  let component: FatburnerComponent;
  let fixture: ComponentFixture<FatburnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatburnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatburnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
