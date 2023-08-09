import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting.component';


@NgModule({
  declarations: [
    VotingComponent
  ],
  imports: [
    CommonModule,
    VotingRoutingModule,
    SharedModule
  ]
})
export class VotingModule { }
