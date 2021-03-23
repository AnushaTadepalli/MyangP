import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproComponent } from './apro.component';

describe('AproComponent', () => {
  let component: AproComponent;
  let fixture: ComponentFixture<AproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
