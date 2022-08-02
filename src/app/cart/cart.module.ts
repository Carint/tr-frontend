import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
