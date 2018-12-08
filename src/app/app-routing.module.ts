import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/main/main.component'
import { AboutComponent } from '../app/about/about.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { GameComponent } from './game/game.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'top-rated',
    component: TopRatedComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'add-feedback',
    component: AddFeedbackComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }