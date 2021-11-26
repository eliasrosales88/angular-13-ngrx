import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  state: State | undefined;
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.subscribe((state:State) =>{
      this.state = state;
      console.log('AppState', state);
      
    })
  }
  navSecured() {
    this.router.navigate(['s', 'preferences']);
  }

  navHome() {
    this.router.navigate(['']);
  }
}
