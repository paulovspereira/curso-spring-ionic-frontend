import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
