import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProassComponent } from './proass.component';

describe('ProassComponent', () => {
  let component: ProassComponent;
  let fixture: ComponentFixture<ProassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
