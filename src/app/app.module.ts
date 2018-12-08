import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { httpService } from './services/httpService';
import { FeedbackComponent } from './feedback/feedback.component';

import { AgGridModule } from 'ag-grid-angular';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { GameComponent } from './game/game.component';
import {ToastyModule} from 'ng2-toasty';
import 'rxjs-compat';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    FeedbackComponent,
    TopRatedComponent,
    GameComponent,
    AddFeedbackComponent,
    ContactUsComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AgGridModule.withComponents([]),
    ToastyModule.forRoot()
  ],
  providers: [
    httpService
  ],
  exports: [ToastyModule],
  bootstrap: [AppComponent]
})
export class AppModule { }