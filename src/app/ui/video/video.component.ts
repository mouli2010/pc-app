
import { Component, OnInit } from '@angular/core';
import {TutorialService } from '../../services/tutorial.service';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, mergeMap,map, catchError} from 'rxjs/operators'

@Component({
  selector: 'tutorial-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    //1JaC83eSr8w
    videoId:String;
    private tutorialId: number;
  constructor( private route: ActivatedRoute,
    private router: Router, private tutorialServ: TutorialService) { }

  ngOnInit() {
    console.log('VideoComponent->ngOnInit')
    this.route.parent.params.subscribe(params => {
      console.log('[Parent params]-->', params);
      this.tutorialId = +params["id"];
    });
    this.route.params.subscribe( params => {
      if (params.videoId == 1 ){
       console.log('id is 1', this.tutorialId)
       let vId = this.tutorialServ.getCourseDetails(this.tutorialId).topics[0].videoId
       this.videoId = "http://www.youtube.com/embed/"+ vId;
      } else {
        this.videoId = "http://www.youtube.com/embed/"+ params.videoId;
        console.log('[videoId]-->', this.videoId);
      }
    });
   
  }

}
