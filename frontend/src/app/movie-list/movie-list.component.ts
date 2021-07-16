import { Component, OnInit } from '@angular/core';
import { PerformerService } from '../performer.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:Movie[]=[];

  constructor(private service:PerformerService,private router: Router) { }

  ngOnInit(): void {
    this.service.getMovieList().subscribe(data=>{
      this.movies=data;
   })
  }

  performerList(id)
  {
      this.router.navigate(['/performer',id]);
  }

  updateMovie(id)
  {
    this.router.navigate(['update',id]);
  }
  
}
