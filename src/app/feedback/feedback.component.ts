import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { httpService } from '../services/httpService';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks = [];

  constructor(private httpService: httpService,
    private toastyService: ToastyService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.httpService.GetFeedbacks().subscribe((data:any)=> {
      for (let i = 0; i < data.length; i++) {
        data[i].FeedbackText = data[i].FeedbackText.replace('\n', '<br/>');
      }
        this.feedbacks = data;
    },
      err => {
        this.toastyService.error({
          title: "פידבקים",
          msg: "התרחשה תקלה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      });
  }
}
