import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBarComponent } from './fancy-bar.component';

describe('FancyBarComponent', () => {
  let component: FancyBarComponent;
  let fixture: ComponentFixture<FancyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
