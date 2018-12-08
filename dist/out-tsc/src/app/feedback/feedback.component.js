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
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(httpService, toastyService) {
        this.httpService = httpService;
        this.toastyService = toastyService;
        this.feedbacks = [];
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    FeedbackComponent.prototype.loadData = function () {
        var _this = this;
        this.httpService.GetFeedbacks().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].FeedbackText = data[i].FeedbackText.replace('\n', '<br/>');
            }
            _this.feedbacks = data;
        }, function (err) {
            _this.toastyService.error({
                title: "פידבקים",
                msg: "התרחשה תקלה!",
                showClose: true,
                timeout: 3000,
                theme: 'default'
            });
        });
    };
    FeedbackComponent = __decorate([
        Component({
            selector: 'app-feedback',
            templateUrl: './feedback.component.html',
            styleUrls: ['./feedback.component.css']
        }),
        __metadata("design:paramtypes", [httpService,
            ToastyService])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map