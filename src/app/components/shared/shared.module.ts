import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BackNavBtnComponent } from './back-nav-btn/back-nav-btn.component';
import { CatBreedComponent } from './cat-breed/cat-breed.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    BackNavBtnComponent,
    CatBreedComponent,
    GridContainerComponent,
    ProgressSpinnerComponent,
  ],
  exports: [
    SidebarComponent,
    TopbarComponent,
    BackNavBtnComponent,
    CatBreedComponent,
    GridContainerComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatProgressSpinnerModule
    
  ]
})
export class SharedModule { }
