import {Component} from '@angular/core';
import {Question} from './question.model';

const q = new Question(
    '¿Cómo hacer un componente en Android',
    'Miren, esta es mi pregunta',
    new Date(),
    'devicon-apple-original'
);

@Component({
    selector: 'app-question-list',
    templateUrl: 'question-list.component.html',
  
})
export class QuestionListComponent{
    questions: Question[] = new Array(10).fill(q);
}