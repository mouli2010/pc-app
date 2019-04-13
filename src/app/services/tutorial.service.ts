import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from './courses';
import {CourseDetails} from './coursedetails';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class TutorialService {
  public coursesData:Courses;
  public courseSubject = new Subject<Courses>();

  constructor(private http: HttpClient) { 
  }

  public getCourses() {
    return this.courseSubject.asObservable();
  }

  public getCourseDetails(courseId): CourseDetails{
    console.log('getCourseDetails-->', this.coursesData)
    return this.coursesData.courses.filter(course => course.courseId == courseId)[0];
  }
}
