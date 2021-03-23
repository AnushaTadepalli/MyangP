import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBComponent } from './eb.component';

describe('EBComponent', () => {
  let component: EBComponent;
  let fixture: ComponentFixture<EBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
