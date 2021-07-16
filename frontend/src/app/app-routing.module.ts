import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatefilmComponent } from './updatefilm/updatefilm.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { PerformerComponent } from './performer/performer.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path:'update/:id',component:UpdatefilmComponent},
  {path:'create',component:CreatemovieComponent},
  {path:'performer/:id',component:PerformerComponent},
  {path:'',component:MovieListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
