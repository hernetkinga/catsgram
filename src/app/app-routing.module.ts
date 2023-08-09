import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 


const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule) },
  { path: 'voting', loadChildren: () => import('./routes/voting/voting.module').then(m => m.VotingModule) },
  { path: 'breeds', loadChildren: () => import('./routes/breeds/breeds.module').then(m => m.BreedsModule) },
  { path: 'gallery', loadChildren: () => import('./routes/gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'search', loadChildren: () => import('./routes/search/search.module').then(m => m.SearchModule) },
  { path: 'likes', loadChildren: () => import('./routes/likes/likes.module').then(m => m.LikesModule) },
  { path: 'favourites', loadChildren: () => import('./routes/favourites/favourites.module').then(m => m.FavouritesModule) },
  { path: 'dislikes', loadChildren: () => import('./routes/dislikes/dislikes.module').then(m => m.DislikesModule) },
  { path: 'info', loadChildren: () => import('./routes/info/info.module').then(m => m.InfoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
