import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: 'latest',
    loadChildren: () => import('./latest/latest.module').then(m => m.LatestModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: 'women',
    loadChildren: () => import('./women/women.module').then(m => m.WomenModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: 'men',
    loadChildren: () => import('./men/men.module').then(m => m.MenModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: 'best',
    loadChildren: () => import('./best-sellers/best-sellers.module').then(m => m.BestSellersModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: 'preorder',
    loadChildren: () => import('./preorder/preorder.module').then(m => m.PreorderModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    // canActivate: [ ValidateTokenGuard, RoleGuardGuard ],
    // canLoad: [ ValidateTokenGuard ],
    // data: {
    //   expectedRoles: ['sa', 'administrador', 'asistente']
    // }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
