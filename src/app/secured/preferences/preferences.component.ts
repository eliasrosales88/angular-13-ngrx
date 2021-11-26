import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private store: Store<State>,
    ) { }
  preferences = this.fb.group({
    book: [''],
    color: [''],
    personalMotto: [''],
  })

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('SUBMIT prefs');
    // console.log('SUBMIT form',this.auth.value);
    // this.authService.signIn(this.auth.value).subscribe((user: User) => {
    //   //dispatch action
    //   this.store.dispatch( new SignInSuccess( {user, provider} ))
    // })

    
  }
}
