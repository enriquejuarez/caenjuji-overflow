import {Routes, RouterModule} from '@angular/router';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SingupScreenComponent } from './auth/singup-screen.component';
import { QuestionListComponent } from './question/question-list.component';

const APP_ROUTES: Routes = [
    {path: '', component: QuestionListComponent, pathMatch: 'full'},
    {path: 'signin', component: SigninScreenComponent},
    {path: 'sigup', component: SingupScreenComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);