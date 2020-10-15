import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import 'hammerjs'
import { QuestionDetailComponent } from './question/question-detail.component'
import { MomentModule } from 'angular2-moment';
import {AnswerFormComponent} from './answer/answer-form.component';
import {SigninScreenComponent} from './auth/signin-screen.component';
import {SingupScreenComponent} from './auth/singup-screen.component';
import {QuestionListComponent} from './question/question-list.component';
import {QuestionFormComponent} from './question/question-form.component';
import {Routing} from './app.routing'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SingupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
