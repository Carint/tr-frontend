import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';

import { WomenRoutingModule } from './women-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule
  ]
})
export class WomenModule { }
