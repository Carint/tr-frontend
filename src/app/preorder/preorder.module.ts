import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';

import { PreorderRoutingModule } from './preorder-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PreorderRoutingModule
  ]
})
export class PreorderModule { }
