import { Component, OnInit } from '@angular/core';
import { PerformerService } from '../performer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-performer',
  templateUrl: './performer.component.html',
  styleUrls: ['./performer.component.css']
})
export class PerformerComponent implements OnInit {

  id:string;
  movie:Movie;

  constructor(private service:PerformerService,private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getMovieDetail(this.id).subscribe(data=>{
      this.movie=data;
    })
  }
  home()
  {
         this.router.navigateByUrl('/');
  }

}
