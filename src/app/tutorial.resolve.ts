import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { TutorialService} from './services/tutorial.service';
import { Courses } from './services/courses';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { tap, mergeMap,map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TutorialResolve implements Resolve<any> {
 constructor(private tutorialSer: TutorialService, private http: HttpClient){

 }
 resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot,) {
     return this.http.get<Courses>("https://codingkrishna.github.io/api/courses.json").pipe(
      tap((data) => {
        this.tutorialSer.coursesData = data;
        this.tutorialSer.courseSubject.next(data);
      }),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }

}
