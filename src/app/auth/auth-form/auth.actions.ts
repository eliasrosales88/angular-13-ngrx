import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export enum AuthActionTypes {
  SignUp = '[Auth] SignUp Action',
  SignUpSuccess = '[Auth] SignUp Success Action',
  SignUpFailure = '[Auth] SignUp Failure Action',
  
  SignIn = '[Auth] SignIn Action',
  SignInSuccess = '[Auth] SignIn Success Action',
  SignInFailure = '[Auth] SignIn Failure Action',
  
  SignOut = '[Auth] SignOut Action',
  SignOutSuccess = '[Auth] SignOut Success Action',
  SignOutFailure = '[Auth] SignOut Failure Action',
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess;
  constructor(public payload: { data: any }) { }
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SignUpFailure;
  constructor(public payload: { error: any }) { }
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SignIn;
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SignInSuccess;
  constructor(public payload: { user: User, provider: string }) { }
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SignInFailure;
  constructor(public payload: { error: any }) { }
}
export class SignOut implements Action {
  readonly type = AuthActionTypes.SignOut;
}

export class SignOutSuccess implements Action {
  readonly type = AuthActionTypes.SignOutSuccess;
  constructor(public payload: { data: any }) { }
}

export class SignOutFailure implements Action {
  readonly type = AuthActionTypes.SignOutFailure;
  constructor(public payload: { error: any }) { }
}

export type AuthActions = 
SignIn 
| SignInSuccess 
| SignInFailure 
| SignUp
| SignUpSuccess
| SignUpFailure
| SignOutFailure
| SignOutFailure
| SignOutFailure

