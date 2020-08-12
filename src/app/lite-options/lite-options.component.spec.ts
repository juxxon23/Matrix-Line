import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteOptionsComponent } from './lite-options.component';

describe('LiteOptionsComponent', () => {
  let component: LiteOptionsComponent;
  let fixture: ComponentFixture<LiteOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
