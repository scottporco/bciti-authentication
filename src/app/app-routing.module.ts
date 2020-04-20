import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  {
    path: 'login', component: AuthenticationComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ]
  },

  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
