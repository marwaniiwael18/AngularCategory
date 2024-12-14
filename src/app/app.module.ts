import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive'; // Import HighlightDirective
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component'; // Import ProductsCategoryComponent
import { CategoryService } from './services/category.service';
import { ProductsCategoryQPComponent } from './products-category-q-p/products-category-q-p.component'; // Import CategoryService
import { DetailsCategoryComponent } from './details-category/details-category.component'; // Import DetailsCategoryComponent

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,
    HighlightDirective,
    NotFoundPageComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent, // Declare ProductsCategoryComponent
    DetailsCategoryComponent // Declare DetailsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [CategoryService], // Provide CategoryService
  bootstrap: [AppComponent]
})
export class AppModule { }

