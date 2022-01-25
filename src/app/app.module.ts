import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movies/movie/movie.component';

@NgModule({
  declarations: [   // all components
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieDetailsComponent,
    FooterComponent,
    MovieComponent
  ],
  imports: [        // modules
    BrowserModule
  ],
  providers: [],    // add service
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
