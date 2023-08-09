import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavBtnComponent } from './back-nav-btn.component';

describe('BackNavBtnComponent', () => {
  let component: BackNavBtnComponent;
  let fixture: ComponentFixture<BackNavBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNavBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackNavBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
