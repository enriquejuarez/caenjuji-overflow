import {Injectable} from '@angular/core';
import { Question } from './question.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { Answer } from '../answer/answer.model';



@Injectable()
export class QuestionService{
  private questionsUrl: string;

  constructor(private http: HttpClient){
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions(): Promise<void | Question[]>{
    // console.log('Questions');
    return this.http.get(this.questionsUrl)
           .toPromise()
           .then(response => response as Question[])
           .catch(this.handleError)
  }

  getQuestion(id): Promise<void | Question>{
    const url = urljoin(this.questionsUrl, id);
    return this.http.get(url)
            .toPromise()
            .then(response => response as Question)
            .catch(this.handleError);

  }

  addQuestion(question: Question){
    const body = JSON.stringify(question);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(this.questionsUrl, body, { headers })
      .pipe(map( (response: Response) => response)
      ,catchError( (error: Response) => Observable.throw(error)));
  }

  addAnswer(answer: Answer){
    console.log('service' + JSON.stringify(answer));
    const body = JSON.stringify(answer);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const url = urljoin(this.questionsUrl, answer.question._id.toString(), 'answers');

    return this.http.post(url, body, { headers })
      .pipe(map( (response: Response) => response)
      ,catchError( (error: Response) => Observable.throw(error)));
  }

  handleError(error: any){
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    console.log(errMsg);
  }
}