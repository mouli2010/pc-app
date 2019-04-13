import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {TutorialService } from './services/tutorial.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { TutorialComponent } from './ui/tutorial/tutorial.component';
import { VideoComponent } from './ui/video/video.component';


import {SafePipe} from './pipes/safepipe';
import { TutorialResolve } from './tutorial.resolve';

const routes: Routes = [
  {path:'', redirectTo: '/tutorial/1/video/ppPZziYJMhc', pathMatch: 'full'},
  { path: 'tutorial/:id', component: TutorialComponent ,
    children: [
      { path: '', redirectTo: '/tutorial/1/video/1', pathMatch: 'full' },
    {
    path:  'video/:videoId',
    component:  VideoComponent
    }],
    resolve: { courses: TutorialResolve }
  }
];

@NgModule({
  declarations: [
    AppComponent,LayoutComponent, HeaderComponent, FooterComponent, TutorialComponent, VideoComponent, SafePipe
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TutorialResolve, TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
