import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';

import { LatestRoutingModule } from './latest-routing.module';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    LatestRoutingModule,
    RouterModule
  ]
})
export class LatestModule { }
