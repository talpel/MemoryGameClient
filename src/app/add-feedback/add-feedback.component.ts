import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { httpService } from '../services/httpService';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  Feedback = '';
  myGlobals = myGlobals;

  constructor(private httpService: httpService,
    private toastyService: ToastyService) {
    if (this.myGlobals.LoginUser == null) {
      window.location.href = '/';
    }
  }

  ngOnInit() {
  }

  InsertFeedback() {
    if (!this.Feedback || this.Feedback.length == 0) {
      this.toastyService.warning({
        title: "הוספת פידבק",
        msg: "לא ניתן לשלוח פידבק ריק!",
        showClose: true,
        timeout: 3000,
        theme: 'default'
      });
      return;
    }
    this.httpService.InsertFeedback({
      FeedbackText: this.Feedback,
      UserId: this.myGlobals.LoginUser.UserId
    }).subscribe(data => {
      if (data == true) {
        this.Feedback = '';
        this.toastyService.success({
          title: "הוספת פידבק",
          msg: "נוסף בהצלחה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });

      }
    },
      err => {
        this.toastyService.error({
          title: "הוספת פידבק",
          msg: "התרחשה תקלה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      });
  }
}
