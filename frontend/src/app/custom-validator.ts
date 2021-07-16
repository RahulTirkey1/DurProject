import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PerformerService } from './performer.service';

export class CustomValidator {
 
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null  {

        if(control.value.startsWith(' ') || control.value.endsWith(' '))
        return {cannotContainSpace:true}

        else
        return null;
        
    }  

}
