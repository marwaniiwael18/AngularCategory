import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Categorie } from '../models/Categorie';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  category: Categorie | undefined;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit(): void {
    const categoryId = +this.route.snapshot.parent?.paramMap.get('id')!;
    this.category = this.categoryService.getCategoryById(categoryId);
  }
}
