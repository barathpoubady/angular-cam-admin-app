import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,
  RouterModule } from '@angular/router';

  import { LivetchatComponent } from './livetchat.component';

const routes: Routes = [
  {
    path: '',
    component: LivetchatComponent,
    data: {
      title: 'Livetchat'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LivetchatRoutingModule { }
