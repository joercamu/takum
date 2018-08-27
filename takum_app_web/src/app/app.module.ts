import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './products/products.component';

import { LoginGuard } from './login.guard';
import { NologinGuard } from './nologin.guard';

import { LoginService } from './login.service';




const ROUTES: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: 'entrar', component: LoginComponent, canActivate: [NologinGuard]},
  {path: 'inicio', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'categorias', component: CategoriesComponent, canActivate: [LoginGuard]},
  {path: 'productos', component: ProductsComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: '/inicio'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    MatInputModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatGridListModule, MatCardModule, MatDividerModule, MatListModule, MatToolbarModule, MatSnackBarModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LoginService,LoginGuard, NologinGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
