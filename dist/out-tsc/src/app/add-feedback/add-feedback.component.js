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
import * as myGlobals from '../globals';
var AddFeedbackComponent = /** @class */ (function () {
    function AddFeedbackComponent(httpService, toastyService) {
        this.httpService = httpService;
        this.toastyService = toastyService;
        this.Feedback = '';
        this.myGlobals = myGlobals;
        if (this.myGlobals.LoginUser == null) {
            window.location.href = '/';
        }
    }
    AddFeedbackComponent.prototype.ngOnInit = function () {
    };
    AddFeedbackComponent.prototype.InsertFeedback = function () {
        var _this = this;
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
        }).subscribe(function (data) {
            if (data == true) {
                _this.Feedback = '';
                _this.toastyService.success({
                    title: "הוספת פידבק",
                    msg: "נוסף בהצלחה!",
                    showClose: true,
                    timeout: 3000,
                    theme: 'default'
                });
            }
        }, function (err) {
            _this.toastyService.error({
                title: "הוספת פידבק",
                msg: "התרחשה תקלה!",
                showClose: true,
                timeout: 3000,
                theme: 'default'
            });
        });
    };
    AddFeedbackComponent = __decorate([
        Component({
            selector: 'app-add-feedback',
            templateUrl: './add-feedback.component.html',
            styleUrls: ['./add-feedback.component.css']
        }),
        __metadata("design:paramtypes", [httpService,
            ToastyService])
    ], AddFeedbackComponent);
    return AddFeedbackComponent;
}());
export { AddFeedbackComponent };
//# sourceMappingURL=add-feedback.component.js.map