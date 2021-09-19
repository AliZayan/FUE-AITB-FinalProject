import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatineComponentComponent } from './creatine-component.component';

describe('CreatineComponentComponent', () => {
  let component: CreatineComponentComponent;
  let fixture: ComponentFixture<CreatineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatineComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
