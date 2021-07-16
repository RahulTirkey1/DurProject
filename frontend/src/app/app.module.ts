import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerformerService } from './performer.service';
import { HttpClientModule } from '@angular/common/http';
import { PerformerComponent } from './performer/performer.component';
import { UpdatefilmComponent } from './updatefilm/updatefilm.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformerComponent,
    UpdatefilmComponent,
    CreatemovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PerformerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
