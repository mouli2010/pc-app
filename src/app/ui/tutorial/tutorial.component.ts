import { Component, OnInit } from '@angular/core';
import {TutorialService } from '../../services/tutorial.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {CourseDetails} from '../../services/coursedetails';

@Component({
  selector: 'tutorial-contant',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  courseDetails:CourseDetails;
  constructor( private route: ActivatedRoute,
    private router: Router, private tutorialSer: TutorialService) { }

  ngOnInit() {
    console.log('TutorialComponent->ngOnInit')
    this.route.params.subscribe( params => {
      let selectedId = params.id;
      console.log(params, selectedId) 
      this.courseDetails = this.tutorialSer.getCourseDetails(selectedId);
      console.log('Final course details -->', this.courseDetails);
    });
   
  }

}
