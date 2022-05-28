import { Component, OnInit } from '@angular/core';
import {FormBuilder,  Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {




  form = this.fb.group({
    name:['', [Validators.required], Validators.maxLength(10)],
    number:['', [Validators.required, Validators.maxLength(10)]],
    email:['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    text:['', Validators.required],
    text1:['', Validators.required],

  })
  onSubmit(){
console.log(this.form.value)
  }



  constructor(public fb: FormBuilder) {}


  ngOnInit(): void {
  }

}
