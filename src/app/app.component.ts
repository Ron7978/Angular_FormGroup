import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form_Group';

  userprofileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    Age: new FormControl(''),
    Email: new FormControl(''),
  });

  onSubmit(){
    console.log(this.userprofileForm.value);

    console.log(this.userprofileForm.controls['firstName'].value);

    // console.log(this.userprofileForm.get('firstName')?.value)
  }
}
