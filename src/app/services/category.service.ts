import { Injectable } from '@angular/core';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Categorie[] = [
    {
      id: 1,
      image: 'assets/images/categorie_electromenager.jpg',
      title: 'Grand électroménager',
      description: 'Description for Grand électroménager',
      available: true
    },
    {
      id: 2,
      image: 'assets/images/categorie_petit_electromenager.jpg',
      title: 'Petit électroménager',
      description: 'Description for Petit électroménager',
      available: false
    },
    // ...add more categories as needed...
  ];

  getCategories(): Categorie[] {
    return this.categories;
  }

  getCategoryById(id: number): Categorie | undefined {
    return this.categories.find(category => category.id === id);
  }
}
