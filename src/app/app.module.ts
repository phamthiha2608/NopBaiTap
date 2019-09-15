import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducerComponent } from './producer/producer.component';
import { ListProductComponent } from './listproduct/listproduct.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';
import { ListSVComponent } from './list-sv/list-sv.component';
import { DetailSVComponent } from './detail-sv/detail-sv.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducerComponent,
    ListProductComponent,
    SupervisorComponent,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component,
    ListSVComponent,
    DetailSVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { path: '', 	component: ListSVComponent},
      {path: 'products', component:ListProductComponent},
      { path: 'products/:produceId', component: ProducerComponent },
      {path: 'listsv', component:ListSVComponent},
      {path: 'listsv/:ID', component:DetailSVComponent},
      { path: '**', redirectTo: 'products', pathMatch: 'full' }, 
    ])     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }