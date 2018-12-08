var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { httpService } from './services/httpService';
import { ToastyService } from 'ng2-toasty';
import * as myGlobals from './globals';
var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, httpService, toastyService) {
        this.modalService = modalService;
        this.httpService = httpService;
        this.toastyService = toastyService;
        this.validated = false;
        this.User = {};
        this.myGlobals = myGlobals;
        if (window.location.href == "http://localhost:4200/") {
            window.location.href = "http://localhost:4200/main";
        }
    }
    AppComponent.prototype.openModal = function (content) {
        this.validated = false;
        this.User = {};
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AppComponent.prototype.signUp = function (form) {
        var _this = this;
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
        this.httpService.signUp(form.value).subscribe(function (data) {
            if (data == true) {
                _this.modalService.dismissAll();
                _this.toastyService.success({
                    title: "הרשמה",
                    msg: "נירשמת בהצלחה!",
                    showClose: true,
                    timeout: 3000,
                    theme: 'default'
                });
            }
            else {
                _this.toastyService.warning({
                    title: "הרשמה",
                    msg: data.toString(),
                    showClose: true,
                    timeout: 3000,
                    theme: 'default'
                });
            }
        }, function (err) {
            _this.toastyService.error({
                title: "הרשמה",
                msg: "השמירה נכשלה!",
                showClose: true,
                timeout: 3000,
                theme: 'default'
            });
        });
    };
    AppComponent.prototype.logout = function () {
        this.myGlobals.setLoginUser(null);
    };
    AppComponent.prototype.login = function (form) {
        var _this = this;
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
        this.httpService.login(form.value).subscribe(function (data) {
            if (typeof data != typeof "string") {
                _this.modalService.dismissAll();
                _this.myGlobals.setLoginUser(data);
                _this.toastyService.success({
                    title: "התחברות",
                    msg: "שלום " + data["FullName"],
                    showClose: true,
                    timeout: 3000,
                    theme: 'default'
                });
            }
            else {
                _this.toastyService.warning({
                    title: "הרשמה",
                    msg: data.toString(),
                    showClose: true,
                    timeout: 3000,
                    theme: 'default'
                });
            }
        }, function (err) {
            _this.toastyService.error({
                title: "הרשמה",
                msg: "התחברות נכשלה!",
                showClose: true,
                timeout: 3000,
                theme: 'default'
            });
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [NgbModal,
            httpService,
            ToastyService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map