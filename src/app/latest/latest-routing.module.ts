import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MainComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: '**', redirectTo: ''}
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild( routes )],
  exports: [ RouterModule ]
})
export class LatestRoutingModule {}
