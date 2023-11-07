import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ShopComponent } from './shop/shop.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { OffersComponent } from './offers/offers.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    NewArrivalsComponent,
    ShopComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    WildCardComponent,
    CartComponent,
    ShippingComponent,
    OffersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',pathMatch: 'full',redirectTo:'home'},
      {path:'home',component:HomeComponent},
      {path:'products',component:ShopComponent},
      {path:'products/:productId',component:ProductDetailsComponent},
      {path: 'cart',component:CartComponent},
      {path:'shipping',component:ShippingComponent},
      {path:'offers',component:OffersComponent},
      {path:'about-us',component:AboutUsComponent},
      {path: '**',component:WildCardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
