import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main/main.component';

import { MenRoutingModule } from './men-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MenRoutingModule
  ]
})
export class MenModule { }
