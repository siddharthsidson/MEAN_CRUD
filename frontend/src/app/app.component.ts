import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import User from './types/user';
import { UserService } from './services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: User[] = [];  
  userService = inject(UserService);
  formBuilder = inject(FormBuilder);

  userForm : FormGroup = this.formBuilder.group({
    name : ['',[Validators.required]],
    email : ['',[Validators.required]],
    age : ['',[Validators.required]],
    address : ['',[Validators.required]],
    password : ['',[Validators.required]]
  })
  ngOnInit(){
    this.userService.getUsers().subscribe(result=>{
      this.users = result;
      console.log(this.users);
    })
  }
  addUser(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      const model:User = this.userForm.value;
      console.log(model);
      this.userService.addUser(model).subscribe(result=>{
        console.log('user added successfully');
      })
    }
  }

}