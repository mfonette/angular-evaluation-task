import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  formGroup: FormGroup;
  formIsValid: boolean = false;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getErrorMessage();
  }

  getControls() {
    return this.formGroup.controls;
  }

getNumberMessage() {
  if (this.getControls()['phoneNumber'].hasError('required')) {
    {
      return 'You must enter a value';
    } 
  }
  else if(this.getControls()['phoneNumber'].hasError('maxLength')) {
    return 'max lenth of 12'
  }
  return this.getControls()['phoneNumber'].hasError('pattern') ? 'invalid pattern' : '';
}

getPasswordMessage() {
  if(this.getControls()['problemTitle'].hasError('required')) {
    return 'enter a problem Title'
  }
  return false
}

  getErrorMessage() {
      if (this.getControls()['email'].hasError('required')
      ) {
        return 'You must enter a value';
      } 
      return this.getControls()['email'].hasError('pattern') ? 'Not a valid email' : '';
  }

  getCommentMessage() {
    if(this.getControls()['checkboxField'].value == true){
      if(this.getControls()['comment'].hasError('required')) {
        return 'You must enter a value';
      }
    }
    return false
  }


  initForm() {
    this.formGroup = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.maxLength(12),
            Validators.pattern('^[0-9]+$'),
          ],
        ],    
        problemTitle: [
          '',
          Validators.compose([
            Validators.required,
          ]),
        ],
        checkboxField: [
          false
        ],
        comment:[
          '',
        ]
    })
    console.log(this.formGroup)
  }

  checkBox(e: any){
    console.log(e.checked)
  }
}
