import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryQPComponent } from './products-category-q-p.component';

describe('ProductsCategoryQPComponent', () => {
  let component: ProductsCategoryQPComponent;
  let fixture: ComponentFixture<ProductsCategoryQPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategoryQPComponent]
    });
    fixture = TestBed.createComponent(ProductsCategoryQPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
