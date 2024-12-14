import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Categorie } from '../models/Categorie';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-q-p.component.html',
  styleUrls: ['./products-category-q-p.component.css']
})
export class ProductsCategoryQPComponent implements OnInit {
  categoryId: number = 0;
  category: Categorie | undefined;
  listProducts: Product[] = [
    // ...existing code...
  ];
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Get category ID from query params
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params['id'];
      
      // Fetch the category details (optional, if you want to display category info)
      this.category = this.categoryService.getCategoryById(this.categoryId);
      
      // Filter products based on category ID
      this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);
    });
  }
}
