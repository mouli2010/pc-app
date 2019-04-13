
import { Component, OnInit } from '@angular/core';
import {TutorialService } from '../../services/tutorial.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {CourseDetails} from '../../services/coursedetails';

@Component({
  selector: 'tutorial-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    //1JaC83eSr8w
    videoId:String;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('VideoComponent->ngOnInit')
    this.route.params.subscribe( params => {
      this.videoId = "http://www.youtube.com/embed/"+ params.videoId;
      console.log('[videoId]-->', this.videoId);
    });
   
  }

}
