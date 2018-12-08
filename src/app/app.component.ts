import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../app/classes/clsUser';
import { httpService } from './services/httpService';
import { NgForm } from '@angular/forms';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import * as myGlobals from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private modalService: NgbModal,
    private httpService: httpService,
    private toastyService: ToastyService) { 
      if (window.location.href == "http://localhost:4200/") {
        window.location.href = "http://localhost:4200/main"
      }
    }
  validated = false;
  User = {};
  myGlobals = myGlobals;

  openModal(content) {
    this.validated = false;
    this.User = {};
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  signUp(form: NgForm) {
    this.validated = true;

    if (form.valid == false) {
      this.toastyService.warning({
        title: "הרשמה",
        msg: "וודא תקינות שדות",
        showClose: true,
        timeout: 3000,
        theme: 'default'
      });
      return;
    }

    this.httpService.signUp(form.value).subscribe(data => {
      if (data == true) {
        this.modalService.dismissAll();
        this.toastyService.success({
          title: "הרשמה",
          msg: "נירשמת בהצלחה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });

      } else {
        this.toastyService.warning({
          title: "הרשמה",
          msg: data.toString(),
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      }
    },
      err => {
        this.toastyService.error({
          title: "הרשמה",
          msg: "השמירה נכשלה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      });
  }

  logout(){
    this.myGlobals.setLoginUser(null);
  }

  login(form: NgForm) {
    this.validated = true;

    if (form.valid == false) {
      this.toastyService.warning({
        title: "התחברות",
        msg: "וודא תקינות שדות",
        showClose: true,
        timeout: 3000,
        theme: 'default'
      });
      return;
    }

    this.httpService.login(form.value).subscribe(data => {
      if (typeof data != typeof "string") {
        this.modalService.dismissAll();
        this.myGlobals.setLoginUser(data);
        this.toastyService.success({
          title: "התחברות",
          msg: "שלום " + data["FullName"],
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });

      } else {
        this.toastyService.warning({
          title: "הרשמה",
          msg: data.toString(),
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      }
    },
      err => {
        this.toastyService.error({
          title: "הרשמה",
          msg: "התחברות נכשלה!",
          showClose: true,
          timeout: 3000,
          theme: 'default'
        });
      });
  }
}
