import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBreedComponent } from './cat-breed.component';

describe('CatBreedComponent', () => {
  let component: CatBreedComponent;
  let fixture: ComponentFixture<CatBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatBreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
