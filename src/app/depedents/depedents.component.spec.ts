import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepedentsComponent } from './depedents.component';

describe('DepedentsComponent', () => {
  let component: DepedentsComponent;
  let fixture: ComponentFixture<DepedentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepedentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepedentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
