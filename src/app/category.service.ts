import { Injectable } from '@angular/core';
import { Categorie } from './models/Categorie'; // Adjust the path as necessary

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
    {
      id: 3,
      image: 'assets/images/categorie_produits_informatiques.jpg',
      title: 'Produits informatiques',
      description: 'Description for Produits informatiques',
      available: true
    },
    {
      id: 4,
      image: 'assets/images/categorie_smartPhone.jpg',
      title: 'Smart Phones',
      description: 'Description for Smart Phones',
      available: true
    },
    {
      id: 5,
      image: 'assets/images/categorie_tv_image_son.jpg',
      title: 'TV, images et son',
      description: 'Description for TV, images et son',
      available: true
    },
    {
      id: 6,
      image: 'assets/images/produits_nettoyages.jpg',
      title: 'Produits voiture',
      description: 'Description for Produits voiture',
      available: false
    }
  ];

  getCategories(): Categorie[] {
    return this.categories;
  }
}
