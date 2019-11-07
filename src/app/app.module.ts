import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DetailSVComponent } from './detail-sv/detail-sv.component';
import { ListProductComponent } from './listproduct/listproduct.component';
import { ProductComponent } from './product/product.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';
import { ListSVComponent } from './list-sv/list-sv.component';
import { HCNComponent } from './hcn/hcn.component';
import { XeploaiComponent } from './xeploai/xeploai.component';
import { ThuongComponent } from './thuong/thuong.component';
import { DrinkComponent } from './drink/drink.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { HttpComponent } from './http/http.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailSVComponent,
    ListProductComponent,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component,
    ListSVComponent,
    ProductComponent,
    SupervisorComponent,
    HCNComponent,
    XeploaiComponent,
    ThuongComponent,
    DrinkComponent,
    CheckComponent,
    HomeComponent,
    DetailComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    SinhvienComponent,
    HttpComponent,
    DetailFilmComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([ 
      { path: '', 	component: ListSVComponent }, 
      {path: 'list-stusent', component:ListSVComponent},
      {path: 'list-product', component:ListProductComponent},
      {path: 'product/:productId', component:ProductComponent},
      {path: 'supervisor', component:SupervisorComponent},
      {path: 'bai1', component:Baitap1Component},
      {path: 'bai2', component:Baitap2Component},
      {path: 'bai3', component:Baitap3Component},
      {path: 'detail/:id', component:DetailSVComponent},
      {path: 'hcn', component:HCNComponent},
      {path: 'thuong', component:ThuongComponent},
      {path: 'xeploai', component:XeploaiComponent},
      {path: 'drink', component:DrinkComponent},
      {path: 'check', component:CheckComponent},
      { path: 'home', 	component: HomeComponent }, 
      { path: 'cart', 	component: ShoppingCartComponent },
      { path: 'checkout', 	component: CheckoutComponent },
      { path: 'guitar/:id', 	component: DetailComponent }, 
      { path: 'guitars/:cid', 	component: HomeComponent }, 
      { path: 'sinhvien', 	component: SinhvienComponent },
      { path: 'http', 	component: HttpComponent},
      { path: 'detailfilm/:url', component: DetailFilmComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
