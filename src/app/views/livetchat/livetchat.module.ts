import { NgModule } from '@angular/core';

import { LivetchatComponent } from './livetchat.component';
import { LivetchatRoutingModule } from './livetchat-routing.module';

@NgModule({
  imports: [
    LivetchatRoutingModule
  ],
  declarations: [LivetchatComponent]
})
export class LivetchatModule { }
