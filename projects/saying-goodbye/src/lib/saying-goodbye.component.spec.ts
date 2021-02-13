import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingGoodbyeComponent } from './saying-goodbye.component';

describe('SayingGoodbyeComponent', () => {
  let component: SayingGoodbyeComponent;
  let fixture: ComponentFixture<SayingGoodbyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayingGoodbyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingGoodbyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
