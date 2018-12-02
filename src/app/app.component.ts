import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService],
})
export class AppComponent {
  questions: any[];
  title = 'pdf-example';
  // tslint:disable-next-line:no-inferrable-types
  showProfileMenu: boolean = false;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }
}
