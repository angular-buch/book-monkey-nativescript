import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { FormsModule } from '@angular/forms';
import { NativeScriptHttpModule  } from 'nativescript-angular/http'; // NEW

import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [  
        AppComponent,
        HomeComponent,
        BookListComponent,
        BookListItemComponent,
        BookDetailsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        FormsModule,
        NativeScriptHttpModule, // NEW
        AppRoutingModule
    ],
    providers: [
        BookStoreService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
