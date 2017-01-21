import { NgModule } from '@angular/core';
import { Routes  } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:isbn',
    component: BookDetailsComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
  providers: []
})
export class AppRoutingModule { }
