import { Component } from '@angular/core';
import { TutorialService} from './services/tutorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private tutorialSer: TutorialService){

  }
}
