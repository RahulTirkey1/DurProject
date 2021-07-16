import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PerformerService {
  

  constructor(private http:HttpClient) { }

  getMovieList()
  {
    let movieList='http://localhost:5000/list';
      return this.http.get<Movie[]>(movieList)
  }

  getMovieDetail(id)
  {
     const url=`http://localhost:5000/movie/${id}`;
     return this.http.get<Movie>(url);
  }

  updateMovieList(movie,id)
  {
    const url1=`http://localhost:5000/update/${id}`;
    return this.http.put(url1, movie,{responseType:'text' as 'json'})
  }

  createMovie(film:Movie)
  {
    let url2=`http://localhost:5000/addMovies`;
    return this.http.post(url2,film,{responseType:'text' as 'json'});
  }

  checkMovieName(title:string)
  {
    let url3=`http://localhost:5000/checkTitle/${title}`;
    return this.http.get<Boolean>(url3);
  }

  deleteMovie(id)
  {
    let url4=`http://localhost:5000/delete/${id}`;
    return this.http.delete(url4,id);
  }
}
