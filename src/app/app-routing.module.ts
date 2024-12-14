import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'; // Import NotFoundPageComponent
import { ProductsCategoryComponent } from './products-category/products-category.component'; // Import ProductsCategoryComponent
import { ProductsCategoryQPComponent } from './products-category-q-p/products-category-q-p.component'; // Import ProductsCategoryQPComponent
import { DetailsCategoryComponent } from './details-category/details-category.component'; // Import DetailsCategoryComponent

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Utilisation de HomeComponent pour la route 'home'
  { path: 'categories', component: ListCategoriesComponent }, // Route pour ListCategoriesComponent
  {
    path: 'products-category/:id',component: ProductsCategoryComponent,
    children: [
  { path: 'details', component: DetailsCategoryComponent } ]},// Route enfant pour afficher les détails
  { path: 'products', component: ProductsCategoryComponent }, // Route pour ProductsCategoryComponent
  { path: 'products-category-qp', component: ProductsCategoryQPComponent }, // Route pour ProductsCategoryQPComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut vers HomeComponent
  { path: '**', component: NotFoundPageComponent } // Route pour les pages non trouvées (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes dans le module
  exports: [RouterModule] // Exporte RouterModule pour l'utiliser dans l'application
})
export class AppRoutingModule { }
