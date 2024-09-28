import { Component } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  userForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      address: this.formBuilder.group({
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required]
      }),
      phoneNumbers:this.formBuilder.array([
        this.formBuilder.control('',[Validators.required,Validators.pattern('[0-9]{10}')])
      ])
    });

  }

  get phoneNumbers(){
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  removePhone(index:number){
    this.phoneNumbers.removeAt(index);
  }
  addPhone(){
    this.phoneNumbers.push(
      this.formBuilder.control('',[Validators.required,Validators.pattern('[0-9]{10}')])
    )
  }
  submitHandler(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
}
