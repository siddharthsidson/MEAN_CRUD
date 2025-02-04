import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import User from './types/user';
import { UserService } from './services/user.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = [];
  userService = inject(UserService);
  formBuilder = inject(FormBuilder);
  submitIsActive : boolean = true;
  updateIsActive : boolean = false;

  userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    age: ['', [Validators.required]],
    address: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
    });
  }
  addUser() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const model: User = this.userForm.value;
      this.userService.addUser(model).subscribe((result) => {
        console.log('user added successfully');
        this.userForm.reset();
        this.getUsers();
      });
    }
  }
  editUser(id: any) {
    let selectedUser = this.users.filter((item: any) => {
      return item._id == id;
    });
    this.userForm.setValue({
      name: selectedUser[0].name,
      email: selectedUser[0].email,
      age: selectedUser[0].age,
      address: selectedUser[0].address,
      password: selectedUser[0].password,
    });
  }
  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((result) => {
      console.log('user deleted successfully');
      this.getUsers();
    });
  }
}
