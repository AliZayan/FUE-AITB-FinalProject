import {Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Validators } from '@angular/forms';
import {FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    ContactForm = new FormGroup({    /* data type bnst3mlha lma ne3mel functionalities zai el validators*/

      username:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required),
    });

  constructor() { }

    
  ngOnInit(): void {
  }
    get username(){
      return this.ContactForm.get('username');
    }
    get email(){
      return this.ContactForm.get('email');
    }
    get message(){
      return this.ContactForm.get('message');
    }

    onUserSubmit():void{
      console.log(this.ContactForm.value);
    }
  }