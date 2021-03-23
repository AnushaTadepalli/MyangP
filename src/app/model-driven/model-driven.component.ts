import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {

  myData=[]
  //  constructor(private formBuilder: FormBuilder) {

  //  }
  //   userForm = new FormGroup({
  //     name:new FormControl('',[ Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //     email: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //    address: new FormGroup({
  //    city: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //    state: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  //    Postalcode: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')])
  //    })
  //   })

  //  submitData() {
  //    console.log(this.userForm.value)
  //  } 

  //}


   
  userForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
  email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
  address: new FormGroup({
  city: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
  state: new FormControl('', [Validators.required, Validators.pattern('[A-Z]*[a-z]+')]),
  postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6,6}$')])
    })
  })
    submitData() {
    //console.log(this.userForm.value)
    this.myData.push(this.userForm.value)
  }
}

