import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { ClickOutsideModule } from '../../directives/click-outside.module';


@NgModule({
  declarations: [
    BreedsComponent
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    SharedModule,
    ClickOutsideModule
  ]
})
export class BreedsModule { }
