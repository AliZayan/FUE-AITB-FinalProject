import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheyComponentComponent } from './whey-component.component';

describe('WheyComponentComponent', () => {
  let component: WheyComponentComponent;
  let fixture: ComponentFixture<WheyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
