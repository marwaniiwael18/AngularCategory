import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Categorie } from '../models/Categorie';
import { Product } from '../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  categoryId: number = 0;
  category: Categorie | undefined;
  listProducts: Product[] = [
    { id: 1, name: 'Refrigérateur LG Inox', image: 'assets/images/grand_electromenagers/refrigerateur.jpg', categoryId: 1, description: 'A high-quality refrigerator with a sleek inox finish.', price: 2800, brand: 'LG', promotion: 0 },
    { id: 2, name: 'Refrigérateur Samsung Blanc', image: 'assets/images/refrigerateur_samsung.jpeg', categoryId: 1, description: 'A reliable and spacious white refrigerator from Samsung.', price: 2400, brand: 'Samsung', promotion: 0 },
    { id: 3, name: 'Lave vaisselle Beko', image: 'assets/images/lave_vaisselle.png', categoryId: 1, description: 'An efficient dishwasher with multiple cleaning modes.', price: 1875, brand: 'BEKO', promotion: 0 },
    { id: 4, name: 'Oppo Smart Phone', image: 'assets/images/smart_phones/Oppo.jpg', categoryId: 4, description: 'A powerful smartphone with advanced features from Oppo.', price: 1200, brand: 'OPPO', promotion: 0 },
    { id: 5, name: 'Hachoir', image: 'assets/images/petit_electromenager/hachoir.jpg', categoryId: 2, description: 'A compact and efficient chopper for your kitchen needs.', price: 120, brand: 'Moulinex', promotion: 0 },
    { id: 6, name: 'TV 50\'\' LG', image: 'assets/images/categorie_tv_image_son.jpg', categoryId: 5, description: 'A 50-inch LG TV with stunning picture quality.', price: 1800, brand: 'LG', promotion: 0 }
  ];
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    // Get category ID from route params
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch the category details (optional, if you want to display category info)
    this.category = this.categoryService.getCategoryById(this.categoryId);
    
    // Filter products based on category ID
    this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);
  }

  viewProducts(): void {
    this.router.navigate(['/products-category-qp'], { queryParams: { id: this.categoryId } });
  }
}
