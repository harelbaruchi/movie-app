import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
} from '@angular/common/http';
// import { SignupComponent } from './signup/signup.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { LoginComponent } from './login/login.component';
// import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { PackagesComponent } from './packages/packages.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchResultsComponent } from './search-movies/search-results/search-results.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    PackagesComponent,
    SearchMoviesComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatIconModule,
    CarouselModule,
  ],
  exports: [MatIconModule],
  providers: [
    MoviesService,
    HttpClientModule,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
