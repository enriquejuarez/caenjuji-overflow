import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Question } from '../question/question.model';
import { Answer } from './answer.model';
import {User} from '../auth/user.model';
import {QuestionService} from '../question/question.service';

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html',
    styles: [`
        form{
            margin-top: 20px;
        }
    `],
    providers: [QuestionService]
})

export class AnswerFormComponent{
    @Input() question: Question;

    constructor (private questionService: QuestionService){}

    onSubmit(form: NgForm){
        
        const answer = new Answer(
            form.value.description,
            this.question
        );
        console.log(answer);
        this.questionService
            .addAnswer(answer)
            .subscribe(
                ({a}) => this.question.answers.unshift(a),
                error => console.log(error)
            );
        form.reset();
    }
}