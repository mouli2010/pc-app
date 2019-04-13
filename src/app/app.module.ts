import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { TutorialComponent } from './ui/tutorial/tutorial.component';
import { VideoComponent } from './ui/video/video.component';

import {TutorialService } from './services/tutorial.service';
import {SafePipe} from './pipes/safepipe';

const routes: Routes = [
  { path: 'tutorial/:id', component: TutorialComponent ,
    children: [
    {
    path:  'video/:videoId',
    component:  VideoComponent
    }]
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
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
