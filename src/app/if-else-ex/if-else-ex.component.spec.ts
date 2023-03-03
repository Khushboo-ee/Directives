import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseExComponent } from './if-else-ex.component';

describe('IfElseExComponent', () => {
  let component: IfElseExComponent;
  let fixture: ComponentFixture<IfElseExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
