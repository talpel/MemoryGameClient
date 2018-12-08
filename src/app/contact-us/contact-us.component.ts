import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { httpService } from '../services/httpService';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  frmObject = {};
  validated = false;
  constructor(private httpService: httpService,
    private toastyService: ToastyService) { }

  ngOnInit() {
  }

  SendMessage(form: NgForm){
    this.validated = true;

    if (form.valid == false) {
      this.toastyService.warning({
        title: "שליחת הודעה",
        msg: "וודא תקינות שדות",
        showClose: true,
        timeout: 3000,
        theme: 'default'
      });
      return;
    }

    this.httpService.SendMessage(form.value).subscribe(data => {
      if (data == true) {
        this.frmObject = {};
        this.validated = false;
        this.toastyService.success({
          title: "שליחת הודעה",
          msg: "ההודעה נשלחה בהצלחה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });

      } 
    },
      err => {
        this.toastyService.error({
          title: "שליחת הודעה",
          msg: "התרחשה תקלה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      });
  }
}
