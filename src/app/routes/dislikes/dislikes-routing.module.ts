import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DislikesComponent } from './dislikes.component';

const routes: Routes = [{ path: '', component: DislikesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DislikesRoutingModule { }
