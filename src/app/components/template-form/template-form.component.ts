import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  user:{name:string,email:string}={
    name:'',
    email:''
  }

  submitUser(form:NgForm){
    if(form.valid){
      console.log(this.user);
    }
  }
  validateEmail():boolean{
    const regExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regExp.test(this.user.email)
  }
}
