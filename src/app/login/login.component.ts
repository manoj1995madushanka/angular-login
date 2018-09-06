import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public id: String;
  constructor() { }

  user = {
    id : 'abc',
    email: 'manu@gmail.com',
    password: 'fAEg'
  };

  ngOnInit() {
  }



  onSubmit(formdata: NgForm) {
    console.log(this.user);
  }

}
