import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { TutorialComponent } from './ui/tutorial/tutorial.component';
import { VideoComponent } from './ui/video/video.component';
import { EditorComponent } from './ui/editor/editor.component';

import { TutorialService } from './services/tutorial.service';
import { CodeExecutorService } from './services/code-executor/code-executor.service';
import { TutorialResolve } from './tutorial.resolve';
import { SafePipe } from './pipes/safepipe';

const routes: Routes = [
  {path:'', redirectTo: '/tutorial/1/video/1', pathMatch: 'full'},
  { path: 'tutorial/:id', component: TutorialComponent ,
    children: [
      { path: '', redirectTo: './video/1', pathMatch: 'full' },
    {
    path:  'video/:videoId',
    component:  VideoComponent
    }],
    resolve: { courses: TutorialResolve }
  }
];

@NgModule({
  declarations: [
    AppComponent,LayoutComponent, HeaderComponent, FooterComponent, TutorialComponent, VideoComponent, EditorComponent,
    SafePipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,AceEditorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TutorialResolve, TutorialService, CodeExecutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
