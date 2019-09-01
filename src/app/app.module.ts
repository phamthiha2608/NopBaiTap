import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducerComponent } from './producer/producer.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducerComponent,
    ListProductComponent,
    SupervisorComponent,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
