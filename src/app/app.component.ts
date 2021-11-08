import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formArray';
  name="formArray";
  formArray:FormGroup|any;


  constructor (private FormGroup:FormBuilder){
    this.formArray = FormGroup.group({
      name : [],
      address:FormGroup.array([])
    })
  }


   onsubmit(){
     const add = this.formArray.get('address') as FormArray;
    add.push(this.FormGroup.group({
      street:[],
      city:[]
    })
    )}


   delete(index:number){
     const add = this.formArray.get('address') as FormArray;
     add.removeAt(index)
  }
}