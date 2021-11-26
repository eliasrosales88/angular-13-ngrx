import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { PreferencesComponent } from './secured/preferences/preferences.component';

const routes: Routes = [
  {
    path: '',
    component: AuthFormComponent
  },
  {
    path: 's/preferences',
    component: PreferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
