import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DassComponent } from './dass.component';

describe('DassComponent', () => {
  let component: DassComponent;
  let fixture: ComponentFixture<DassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
