import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './componenet/product/product.component';
import { FormComponent } from './componenet/form/form.component';
import { NavbarComponent } from './componenet/navbar/navbar.component';
import { FooterComponent } from './componenet/footer/footer.component';
import { NotFoundComponent } from './componenet/not-found/not-found.component';
import { HomeComponent } from './componenet/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FormComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
