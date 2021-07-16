import { Component, OnInit } from '@angular/core';
import { PerformerService } from '../performer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Movie } from '../movie';
import { CustomValidator } from '../custom-validator';
@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {

  createForm:FormGroup;
  movie:Movie=new Movie();

  constructor(private service:PerformerService,
    private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {

   this.createForm=this.fb.group({
     name:['',[Validators.required,CustomValidator.cannotContainSpace]],
     description:['',[Validators.required,CustomValidator.cannotContainSpace]],
     actor:this.fb.array([new FormControl('',[Validators.required,CustomValidator.cannotContainSpace])]),
   });
  }

   get actor()
  {
    return this.createForm.get('actor') as FormArray;
    
  }
  addOtherActors() {
    this.actor.push(this.fb.control('',[Validators.required,CustomValidator.cannotContainSpace]));
  }
  get name()
  {
    return this.createForm.get('name');
  }
  removeActor(i)
  {
     this.actor.removeAt(i);
  }
  get description()
  {
    return this.createForm.get('description');
  }
  addFilm(form:FormGroup)
  {
    this.movie.actor=form.value.actor;
    this.movie.name=form.value.name;
    this.movie.description=form.value.description;
    this.service.createMovie(this.movie).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/');
    });

  }
  home()
  {
    this.router.navigateByUrl('/');
  }

}
