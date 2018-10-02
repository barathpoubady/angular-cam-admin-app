import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetchatComponent } from './livetchat.component';

describe('LivetchatComponent', () => {
  let component: LivetchatComponent;
  let fixture: ComponentFixture<LivetchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivetchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
