import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from './courses';
import {CourseDetails} from './coursedetails';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class TutorialService {
  private coursesData:Courses;
  private courseSubject = new Subject<Courses>();

  constructor(private http: HttpClient) { 
    this.getCompleteCourseData();
  }

  private getCompleteCourseData(){
    this.http.get<Courses>("https://codingkrishna.github.io/api/courses.json")
    .subscribe(data => {
      console.log('TutorialService-->', data);
      this.coursesData = data;
      this.courseSubject.next(data);
    })
  }

  /*public getCourses(){
    return this.coursesData.courses.map(course => course.name);
  }*/

public getCourses() {
    return this.courseSubject.asObservable();
  }

  public getCourseDetails(courseId): CourseDetails{
    console.log('getCourseDetails-->', this.coursesData)
    return this.coursesData.courses.filter(course => course.courseId == courseId)[0];
  }
}
