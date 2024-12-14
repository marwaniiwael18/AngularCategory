import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'; // Import NotFoundPageComponent if it exists
import { ProductsCategoryComponent } from './products-category/products-category.component'; // Import ProductsCategoryComponent
import { ProductsCategoryQPComponent } from './products-category-q-p/products-category-q-p.component'; // Import ProductsCategoryQPComponent
import { DetailsCategoryComponent } from './details-category/details-category.component'; // Import DetailsCategoryComponent

const routes: Routes = [
  { path: 'home', component: ListCategoriesComponent }, // Use HomeComponent
  { path: 'categories', component: ListCategoriesComponent }, // Add route for ListCategoriesComponent
  {
    path: 'products-category/:id',
    component: ProductsCategoryComponent,
    children: [
      { path: 'details', component: DetailsCategoryComponent }
    ]
  },
  { path: 'products', component: ProductsCategoryComponent }, // Add route for ProductsCategoryComponent
  { path: 'products-category-qp', component: ProductsCategoryQPComponent }, // Add route for ProductsCategoryQPComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', component: NotFoundPageComponent } // Route 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
