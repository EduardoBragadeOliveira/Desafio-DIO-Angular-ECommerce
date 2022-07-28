import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { StoreAppComponent } from './components/store-app/store-app.component';
import { FiltersComponent } from './components/store-app/filters/filters.component';
import { ProductListComponent } from './components/store-app/product-list/product-list.component';
import { ProductItemComponent } from './components/store-app/product-list/product-item/product-item.component';
import { DunhallService } from './components/store-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    StoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DunhallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
