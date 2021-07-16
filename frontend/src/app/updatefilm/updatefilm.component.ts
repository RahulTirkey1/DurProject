import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PerformerService } from '../performer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, FormsModule, AbstractControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Movie } from '../movie';
import { CustomValidator } from '../custom-validator';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-updatefilm',
  templateUrl: './updatefilm.component.html',
  styleUrls: ['./updatefilm.component.css']
})
export class UpdatefilmComponent implements OnInit {

  id:string;
  movie:Movie=new Movie();
  updateMovieForm:FormGroup;


  constructor(private service:PerformerService,private route: ActivatedRoute,
    private fb: FormBuilder, private router: Router ) { }
  
  ngOnInit(): void {

    

    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getMovieDetail(this.id).subscribe(data=>{
      this.movie=data; 
      this.updateMovieForm=this.fb.group({
        name:[this.movie.name,[Validators.required,CustomValidator.cannotContainSpace.bind(this)]],
        description:[this.movie.description,[Validators.required,CustomValidator.cannotContainSpace.bind(this)]],
     //   actor:this.fb.array(this.movie.actor,Validators.required)
          actor:this.fb.array([])
      });

      this.getActors();
      
      })
    }

    getActors()
    {
      let arr=this.updateMovieForm.get('actor') as FormArray;
        for(let i in this.movie.actor)
        {
          arr.push(new FormControl(this.movie.actor[i],[Validators.required,CustomValidator.cannotContainSpace.bind(this)]));
        }
    }
  addPersons()
  {
    this.actor.push(this.fb.control('',[Validators.required,CustomValidator.cannotContainSpace.bind(this)]));
  }
  get name()
  {
    return this.updateMovieForm.get('name');
  }

  get description()
  {
    return this.updateMovieForm.get('description');
  }
  get actor()
  {
    return this.updateMovieForm.get('actor') as FormArray;
  }
   removeActor(i)
   {
     this.actor.removeAt(i);
   }
  readyChange(name:FormGroup)
  {
    this.movie._id=this.id;
    this.movie.name=name.value.name;
    this.movie.description=name.value.description;
    this.movie.actor=name.value.actor;
       this.service.updateMovieList(this.movie,this.id).subscribe(data=>{
         
         this.router.navigateByUrl('/');
       });
  }

  home()
  {
    this.router.navigateByUrl('/');
  }

 deleteMovie()
 {
   this.service.deleteMovie(this.id).subscribe(e=>{
       console.log(e);
       this.router.navigateByUrl('/');
   })
 }

}
