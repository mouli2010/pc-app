import { Component, OnInit } from '@angular/core';
import {TutorialService } from '../../services/tutorial.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  courseList = [];
  courseGropList = [];
  constructor(private tutorialSer: TutorialService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tutorialSer.getCourses().subscribe(data=> {
      console.log('Header Courses -->', data)
      this.courseList = data.courses;
      console.log('courseList-->', this.courseList);
      const groupedCollection = this.courseList.reduce((previous, current)=> {
        let property = 'type';
        if(!previous[current[property]]) {
            previous[current[property]] = [current];
        } else {
            previous[current[property]].push(current);
        }
        return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
       this.courseGropList =  Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
      console.log('courseGropList',this.courseGropList );

    });
  }

}
