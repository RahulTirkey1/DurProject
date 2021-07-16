import { Component, OnInit } from '@angular/core';
import { PerformerService } from './performer.service';
import { Movie } from './movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
    
  }

  addMovie()
  {
    this.router.navigateByUrl('/create');
  }

}
