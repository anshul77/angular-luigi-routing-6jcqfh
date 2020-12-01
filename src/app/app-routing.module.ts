import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LuigiComponent }    from './luigi/luigi.component';


const appRoutes: Routes = [
  {
    path: 'luigi',
    component: LuigiComponent,
  },
  { path: '',   redirectTo: '/luigi', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/