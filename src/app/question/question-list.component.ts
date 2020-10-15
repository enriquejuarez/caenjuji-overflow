import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

const q = new Question(
  '¿Cómo hacer un componente en Android',
  'Miren, esta es mi pregunta',
  new Date(),
  'devicon-apple-original'
);

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: [`
        .add-question{
            position: fixed;
            bottom: 30px;
            right: 30px;
            font-size: 32px;
        }
    `],
  providers: [QuestionService]

})
export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) {

  }
  // questions: Question[] = new Array(10).fill(q);
  questions: Question[];
  loading = true;

  ngOnInit() {
    this.questionService
      .getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      })
  }
}