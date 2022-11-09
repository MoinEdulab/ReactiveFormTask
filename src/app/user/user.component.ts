import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  title = 'crudClient';
  apiUrl = 'http://localhost:3000'
  // userModel = { 
  //   id: 500,
  //   firstName: 'Francis',
  //   lastName: 'Pinto'
  //   };
  constructor(private http: HttpClient) { }
  insert(id: any,firstname: any,lastname: any){
    this.http.post<any[]>(this.apiUrl+"/details",{
      id:id,
    firstname:firstname,
    lastname:lastname}).subscribe(data => 
      console.log(data));

    console.log("data inserted !");
    
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      'id': new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
    })
  }

  submitData() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      alert(`You have submited successfully  ${this.userForm.value.firstName}`)
    }
  }
  restForm() {
    this.userForm.reset();
  }

  get Id(): FormControl {
    return this.userForm.get("id") as FormControl;
  }
  get FirstName(): FormControl {
    return this.userForm.get("firstName") as FormControl;
  }
  get lastName(): FormControl {
    return this.userForm.get("lastName") as FormControl;
  }




  
}

