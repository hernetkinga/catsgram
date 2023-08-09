import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';


@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    SharedModule
  ]
})
export class FavouritesModule { }
