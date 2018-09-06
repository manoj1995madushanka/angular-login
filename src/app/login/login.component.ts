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
    id : 'SCS2101/C1',
    email: 'abc@123.com',
    password: 'abc'
  };

  ngOnInit() {
  }



  onSubmit(formdata: NgForm) {
    console.log(this.user);
  }

}
