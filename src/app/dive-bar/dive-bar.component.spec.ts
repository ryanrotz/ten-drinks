import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveBarComponent } from './dive-bar.component';

describe('DiveBarComponent', () => {
  let component: DiveBarComponent;
  let fixture: ComponentFixture<DiveBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
