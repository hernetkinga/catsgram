import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { DislikesRoutingModule } from './dislikes-routing.module';
import { DislikesComponent } from './dislikes.component';


@NgModule({
  declarations: [
    DislikesComponent
  ],
  imports: [
    CommonModule,
    DislikesRoutingModule,
    SharedModule
  ]
})
export class DislikesModule { }
