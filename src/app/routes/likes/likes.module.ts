import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { LikesRoutingModule } from './likes-routing.module';
import { LikesComponent } from './likes.component';


@NgModule({
  declarations: [
    LikesComponent
  ],
  imports: [
    CommonModule,
    LikesRoutingModule,
    SharedModule
  ]
})
export class LikesModule { }
