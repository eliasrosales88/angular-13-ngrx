import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthActionTypes } from '../auth/auth-form/auth.actions';
import { User } from '../auth/models/user.model';


type AuthState = {
  signedIn: boolean,
  user: User | undefined
}
const initialAuthState: AuthState = {
  signedIn: false,
  user: undefined
}
function authReducer(state:AuthState = initialAuthState, action: any): AuthState {
  switch (action.type) {
    case AuthActionTypes.SignInSuccess:
      return {
        signedIn: true,
        user: action.payload.user,
        provider: action.payload.provider
      } as AuthState;
  
    default:
      return state;
  }
}


export interface State {
  auth: AuthState,
  
}

export const reducers: ActionReducerMap<State> = {
auth: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
