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
import { ToastyService } from 'ng2-toasty';
import { httpService } from '../services/httpService';
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(httpService, toastyService) {
        this.httpService = httpService;
        this.toastyService = toastyService;
        this.frmObject = {};
        this.validated = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.SendMessage = function (form) {
        var _this = this;
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
        this.httpService.SendMessage(form.value).subscribe(function (data) {
            if (data == true) {
                _this.frmObject = {};
                _this.validated = false;
                _this.toastyService.success({
                    title: "שליחת הודעה",
                    msg: "ההודעה נשלחה בהצלחה!",
                    showClose: true,
                    timeout: 3000,
                    theme: 'default'
                });
            }
        }, function (err) {
            _this.toastyService.error({
                title: "שליחת הודעה",
                msg: "התרחשה תקלה!",
                showClose: true,
                timeout: 3000,
                theme: 'default'
            });
        });
    };
    ContactUsComponent = __decorate([
        Component({
            selector: 'app-contact-us',
            templateUrl: './contact-us.component.html',
            styleUrls: ['./contact-us.component.css']
        }),
        __metadata("design:paramtypes", [httpService,
            ToastyService])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
export { ContactUsComponent };
//# sourceMappingURL=contact-us.component.js.map