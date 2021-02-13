import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakeHandsComponent } from './shake-hands.component';

describe('ShakeHandsComponent', () => {
  let component: ShakeHandsComponent;
  let fixture: ComponentFixture<ShakeHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakeHandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
