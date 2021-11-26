import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { SignIn, SignInSuccess } from './auth.actions';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private store: Store<State>,
    private authService: AuthService
    ) { }
  auth = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(provider?: any){
    console.log('SUBMIT provider',provider);
    console.log('SUBMIT form',this.auth.value);
    this.authService.signIn(this.auth.value).subscribe((user: User) => {
      //dispatch action
      this.store.dispatch( new SignInSuccess( {user, provider} ))
    })

    
  }
}
