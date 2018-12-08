(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".developer-card {\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldmVsb3Blci1jYXJkIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card developer-card\">\n    <img class=\"card-img-top\" src=\"../../assets/about-developer.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">שם המפתח</h5>\n      <p class=\"card-text\">\n        \nגייטס - פורטרט כחלק מאוסף \"תמונות עשירי העולם לפי פורבס, 2017\" של האמן דנאור שטרוזמן\nויליאם הנרי \"ביל\" גייטס השלישי (באנגלית: William Henry \"Bill\" Gates III; נולד ב-28 באוקטובר 1955) הוא יזם, איל הון, משקיע, סופר ופילנתרופ אמריקאי. בשנת 1975, גייטס ופול אלן ייסדו את מיקרוסופט, שהפכה לחברת התוכנה הגדולה בעולם. במהלך הקריירה שלו במיקרוסופט, גייטס מילא את תפקידי היו\"ר, המנכ\"ל ואדריכל התוכנה הראשי (Chief Software Architect), והיה בעל המניות הגדול ביותר עד מאי 2014.\n\nמאז 1987, גייטס נכלל ברשימת האנשים העשירים בעולם של פורבס,[1] והיה העשיר ביותר מ-1995 עד 2007, שוב ב-2009, ומ-2014 ועד 2017. בין השנים 2009 ו-2014 העושר שלו הוכפל מ-40 מיליארד דולר ליותר מ-82 מיליארד דולר, והוא היה לאדם העשיר ביותר בעולם, עם שווי נאמד של 89.8 מיליארד דולר נכון ליולי 2017.[2][3] גייטס הוא מגדולי הנדבנים, ותרומותיו במהלך השנים הגיעו ליותר מ-40 מיליארד דולר.\n      </p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _app_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _app_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'about',
        component: _app_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'feedback',
        component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"]
    },
    {
        path: 'top-rated',
        component: _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_5__["TopRatedComponent"]
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-box {\r\n    margin: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: flex;\r\n}\r\n\r\n.menu-side {\r\n    width: 250px;\r\n    height: 100%;\r\n    background-color: rgba(0, 49, 87, 1);\r\n    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.5);\r\n    z-index: 1;\r\n}\r\n\r\n.content-side {\r\n    flex: 1;\r\n    height: 100%;\r\n    padding-top: 50px;\r\n    box-sizing: border-box;\r\n    z-index: 0;\r\n    background-color: #c0c0c0;\r\n}\r\n\r\n.main-header {\r\n    height: 50px;\r\n    width: 100vw;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 49, 87, 1);\r\n    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n}\r\n\r\n.main-title {\r\n    color: white;\r\n    text-align: center;\r\n    padding-top: 11px;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-side {\r\n    padding-top: 70px;\r\n\r\n}\r\n\r\n.menu-item {\r\n    height: 50px;\r\n    width: 100%;\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 11px;\r\n    background-color: #003e6d;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: solid;\r\n    border-color: #636363;\r\n    cursor: pointer;\r\n    transition: all linear 0.1s;\r\n}\r\n\r\n.menu-item:first-of-type {\r\n    border-top-width: 1px;\r\n    border-top-style: solid;\r\n}\r\n\r\n.menu-item:hover {\r\n    padding-right: 14px;\r\n    background-color: #00467c;\r\n}\r\n\r\n.route-box {\r\n    background-color: #ededed;\r\n    margin: 10px;\r\n    box-shadow: 0 0 8px 0px rgba(0,0,0,0.5);\r\n    height: calc(100% - 20px);\r\n    overflow: auto;\r\n}\r\n\r\n.menu-icon {\r\n    margin: 0 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNENBQTRDO0lBQzVDLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDRDQUE0QztJQUM1QyxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxrQkFBa0I7O0NBRXJCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib3gge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tZW51LXNpZGUge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA0OSwgODcsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250ZW50LXNpZGUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA0OSwgODcsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tZW51LXNpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcblxyXG59XHJcblxyXG4ubWVudS1pdGVtIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2U2ZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNjM2MzYzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjFzO1xyXG59XHJcblxyXG4ubWVudS1pdGVtOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW06aG92ZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQ2N2M7XHJcbn1cclxuXHJcbi5yb3V0ZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgICBtYXJnaW46IDAgNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n  <h5 class=\"main-title\">משחק הזיכרון</h5>\n</div>\n<div class=\"main-box\">\n  <div class=\"menu-side\">\n    <div class=\"menu-item\" routerLink=\"/\" routerLinkActive=\"main\">\n      <i class=\"fas fa-home menu-icon\"></i>\n      דף הבית\n    </div>\n    <div class=\"menu-item\" (click)=\"openSignUp(content)\">\n      <i class=\"fas fa-user-plus menu-icon\"></i>\n      הרשמה\n    </div>\n    <div class=\"menu-item\"  routerLink=\"/game\" routerLinkActive=\"game\">\n      <i class=\"fas fa-dice menu-icon\"></i>\n      משחק\n    </div>\n    <div class=\"menu-item\"  routerLink=\"/top-rated\" routerLinkActive=\"top-rated\">\n      <i class=\"fas fa-trophy menu-icon\"></i>\n      תוצאות משחקים\n    </div>\n    <div class=\"menu-item\"  routerLink=\"/feedback\" routerLinkActive=\"feedback\">\n      <i class=\"fas fa-comments menu-icon\"></i>\n      פידבקים\n    </div>\n    <div class=\"menu-item\" routerLink=\"/about\" routerLinkActive=\"about\">\n      <i class=\"fas fa-info-circle menu-icon\"></i>\n      אודות\n    </div>\n  </div>\n  <div class=\"content-side\">\n    <div class=\"route-box\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">הרשמה</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form style=\"direction: ltr !important\" [ngClass]=\"{ 'was-validated': validated }\" \n    class=\"container\" novalidate=\"\" id=\"myForm\"\n    name=\"myForm\" #myForm=\"ngForm\"\n    >\n      <div class=\"form-group row\">\n        <label for=\"fullName\" class=\"col-3 col-form-label\">שם מלא</label>\n        <div class=\"col-9\"> \n          <input class=\"form-control\" name=\"fullName\" [(ngModel)]=\"User.fullName\" #fullName=\"ngModel\" type=\"text\" id=\"fullName\" required>\n          <div class=\"invalid-feedback\" *ngIf=\"fullName.errors?.required\">שדה חובה!</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"userName\" class=\"col-3 col-form-label\">שם משתמש</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"User.userName\" id=\"userName\" name=\"userName\" required #userName=\"ngModel\">\n          <div class=\"invalid-feedback\" *ngIf=\"userName.errors?.required\">שדה חובה!</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"password\" class=\"col-3 col-form-label\">סיסמה</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" type=\"password\" [(ngModel)]=\"User.password\" id=\"password\" name=\"password\" required #password=\"ngModel\">\n          <div class=\"invalid-feedback\" *ngIf=\"password.errors?.required\">שדה חובה!</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-3 col-form-label\">אימייל</label>\n        <div class=\"col-9\">\n          <input class=\"form-control\" type=\"email\" [(ngModel)]=\"User.email\" id=\"email\" name=\"email\">\n          <div class=\"invalid-feedback\">דוא\"ל לא חוקי</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"birthDay\" class=\"col-3 col-form-label\">תאריך לידה</label>\n        <div class=\"col-9\">\n          <input (click)=\"d2.toggle()\" class=\"form-control\" [(ngModel)]=\"User.birthDay\" type=\"date\" \n          id=\"birthDay\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d2=\"ngbDatepicker\" name=\"birthDay\">\n          <div class=\"invalid-feedback\">תאריך לא חוקי</div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"signUp(myForm)\">הירשם</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_classes_clsUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/classes/clsUser */ "./src/app/classes/clsUser.ts");
/* harmony import */ var _services_httpService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/httpService */ "./src/app/services/httpService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, httpClient, httpService) {
        this.modalService = modalService;
        this.httpClient = httpClient;
        this.httpService = httpService;
        this.User = {};
        this.validated = false;
    }
    AppComponent.prototype.openSignUp = function (content) {
        this.User = new _app_classes_clsUser__WEBPACK_IMPORTED_MODULE_3__["User"]({});
        this.validated = false;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    AppComponent.prototype.signUp = function (form) {
        this.validated = true;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        // var tempUser: any = this.User;
        // const Users: User = {
        //   BirthDate : null,
        //   Email: 'tempUser.Email',
        //   FullName: 'tempUser.FullName',
        //   Password: 'tempUser.Password',
        //   UserName: 'tempUser.UserName'
        // };
        this.httpService.signUp(form.value).subscribe(function (data) {
            var t = 1;
            console.log(data);
        });
        //this.modalService.close('Save click');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_httpService__WEBPACK_IMPORTED_MODULE_4__["httpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_httpService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/httpService */ "./src/app/services/httpService.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"],
                _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_12__["TopRatedComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([])
            ],
            providers: [
                _services_httpService__WEBPACK_IMPORTED_MODULE_9__["httpService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/clsUser.ts":
/*!************************************!*\
  !*** ./src/app/classes/clsUser.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = /** @class */ (function () {
    //BirthDate: Date;
    function User(userJson) {
        //this.UserId = userJson.UserId;
        this.FullName = userJson.FullName;
        this.UserName = userJson.UserName;
        this.Password = userJson.Password;
        this.Email = userJson.Email;
        //this.BirthDate = userJson.BirthDate;
    }
    User = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [Object])
    ], User);
    return User;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback-container {\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n\r\n.feedback-image-container {\r\n    flex-basis: 80px;\r\n}\r\n\r\n.feedback-image {    \r\n    width: 50px;\r\n    margin: 11px;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.4);\r\n    border-radius: 50%;\r\n    border: 1px solid #005dff;\r\n}\r\n\r\n.feedback-box {\r\n    background-color: white;\r\n    padding: 8px;\r\n    color: black;\r\n    flex: 1;\r\n    border-radius: 4px;\r\n    border: 1px solid #b1b1b1;\r\n    box-shadow: 0 0 9px rgba(0,0,0,0.1);\r\n}\r\n\r\n.feedback-writer {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    display: block;\r\n}\r\n\r\n.feedback-content {\r\n\r\n}\r\n\r\n.feedback-datetime {\r\n    color: gray;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQ0FBb0M7Q0FDdkM7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7O0FBRUQ7O0NBRUM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFjay1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZlZWRiYWNrLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiA4MHB4O1xyXG59XHJcblxyXG4uZmVlZGJhY2staW1hZ2UgeyAgICBcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1ZGZmO1xyXG59XHJcblxyXG4uZmVlZGJhY2stYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMWIxYjE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLmZlZWRiYWNrLXdyaXRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZmVlZGJhY2stY29udGVudCB7XHJcblxyXG59XHJcblxyXG4uZmVlZGJhY2stZGF0ZXRpbWUge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feedback-container\" *ngFor=\"let feedback of feedbacks\">\n  <div class=\"feedback-image-container\">\n    <img src=\"../../assets/user-image.png\" class=\"feedback-image\">\n  </div>\n  <div class=\"feedback-box\">\n    <span class=\"feedback-writer\">{{feedback.feedbackWriter}}</span>\n    <div class=\"feedback-content\">\n        {{feedback.feedbackContent}}\n    </div>\n    <div class=\"feedback-datetime\">\n        {{feedback.feedbackDate}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
        this.feedbacks = [];
        this.feedbacks = [
            {
                feedbackWriter: 'ישראל ישראלי',
                feedbackContent: '      מנגנון תגובות הגולשים ("תגובה לכתבה") הוא אחד הכלים החשובים באתר, שכן הוא מאפשר לגולשים להביע את דעתם ולתת לה פומבי, וכן ליצור אינטראקציות בינם לבין עצמם. מערכת ynet שואפת לאפשר לגולשים רבים ככל האפשר להתבטא, ולפרסם את תגובתם בתוך פרק-זמן קצר. כל התגובות באתר עוברות תהליך של אישור ע"י עורך בטרם פרסומן.',
                feedbackDate: '12/5/2018 12:30'
            }
        ];
        this.feedbacks.push(this.feedbacks[0]);
        this.feedbacks.push(this.feedbacks[0]);
        this.feedbacks.push(this.feedbacks[0]);
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-container {\r\n    text-align: center;\r\n}\r\n.game-board {\r\n    margin: 20px;\r\n    background-image: url('c:/inetpub/wwwroot/gameover.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.board-row {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.board-cell {\r\n    width: 120px;\r\n    height: 120px;\r\n    background-color: white;\r\n    box-shadow: 0 0 5px rgba(0,0,0,0.4);\r\n    margin: 5px;\r\n    transition: all linear 0.2s;\r\n    cursor: pointer;\r\n}\r\n.board-cell:hover {\r\n    background-color: white;\r\n    box-shadow: 0 0 8px rgba(0,0,0,0.5);\r\n}\r\n.hidden-card {\r\n    opacity: 0;\r\n}\r\n.card-image {\r\n    width: 120px;\r\n    height: 120px;\r\n}\r\n.stoper-container {\r\n    margin:0;padding:0;box-sizing:border-box;\r\n    font-family:Arial;\r\n    font-size:2.35em;\r\n    color:black;\r\n\r\n}\r\n#time {\r\n    position: absolute;\r\n    left: 20px;\r\n}\r\n#time p{\r\n  font-size:0.3em;\r\n}\r\n.start-cover {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.7);\r\n    z-index: 2;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.start-cover .btn {\r\n    margin: auto;\r\n}\r\n.finish-title {\r\n    color: #8fff8f;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin: 20px;\r\n    line-height: 2;\r\n    display: block;\r\n    font-size: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYix5REFBbUQ7SUFDbkQsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0NBQ3RCO0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixvQ0FBb0M7Q0FDdkM7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFFRDtJQUNJLFNBQVMsVUFBVSxzQkFBc0I7SUFDekMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZOztDQUVmO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nYW1lLWJvYXJkIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2dhbWVvdmVyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJvYXJkLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC1jZWxsIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC1jZWxsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsMCwwLDAuNSk7XHJcbn1cclxuXHJcbi5oaWRkZW4tY2FyZCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uc3RvcGVyLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46MDtwYWRkaW5nOjA7Ym94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWw7XHJcbiAgICBmb250LXNpemU6Mi4zNWVtO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcblxyXG59XHJcblxyXG4jdGltZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4jdGltZSBwe1xyXG4gIGZvbnQtc2l6ZTowLjNlbTtcclxufVxyXG5cclxuLnN0YXJ0LWNvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXJ0LWNvdmVyIC5idG4ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZmluaXNoLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjOGZmZjhmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\">\n\n  <div id=\"time\">\n    <h1><span>{{timerDisplay.m}}</span>:<span>{{timerDisplay.s}}</span>:<span>{{timerDisplay.ms}}</span></h1>\n  </div>\n\n  <div class=\"game-board\">\n    <div class=\"start-cover\" *ngIf=\"gameIsStarted == false\">\n      <div class=\"finish-title\" *ngIf=\"gameIsFinished == true\">\n        <span>\n          כל הכבוד!\n          <br>\n          זמן משחק:\n        </span>\n        <span>{{timerDisplay.m}}</span>:<span>{{timerDisplay.s}}</span>:<span>{{timerDisplay.ms}}</span>\n\n      </div>\n\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"startGame()\">התחל משחק</button>\n\n    </div>\n    <div class=\"board-row\" *ngFor=\"let row of gameBoard\">\n      <div class=\"board-cell\" *ngFor=\"let cell of row\" (click)=\"openCard(cell)\" [ngClass]=\"{ 'hidden-card': cell.isHidden }\">\n\n        <img [src]=\"cell.cardImage\" *ngIf=\"cell.cardImage && cell.isOpen\" class=\"card-image\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.gameBoard = [];
        this.openCards = [];
        this.gameIsStarted = false;
        this.gameIsFinished = false;
        this.m = 0;
        this.s = 0;
        this.ms = 0;
        this.timerDisplay = { m: '00', s: '00', ms: '00' };
        this.resetTimer = this.resetTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }
    GameComponent.prototype.ngOnInit = function () {
        this.loadBoard();
    };
    GameComponent.prototype.loadBoard = function () {
        // var images = [
        //   '../../assets/1.png',
        //   '../../assets/2.jpg',
        //   '../../assets/3.jpg',
        //   '../../assets/4.png',
        //   '../../assets/5.png',
        //   '../../assets/6.png',
        //   '../../assets/7.png',
        //   '../../assets/8.png'
        // ];
        var images = [
            '../../assets/1.png',
            '../../assets/1.png',
            '../../assets/1.png',
            '../../assets/1.png',
            '../../assets/1.png',
            '../../assets/1.png',
            '../../assets/1.png',
            '../../assets/1.png'
        ];
        images = images.concat(images);
        this.gameBoard = [
            [
                {}, {}, {}, {}
            ],
            [
                {}, {}, {}, {}
            ], [
                {}, {}, {}, {}
            ], [
                {}, {}, {}, {}
            ]
        ];
        for (var i = 0; i < this.gameBoard.length; i++) {
            var row = this.gameBoard[i];
            for (var j = 0; j < row.length; j++) {
                var randIndex = Math.floor(Math.random() * images.length);
                row[j].cardImage = images.splice(randIndex, 1)[0];
                row[j].isOpen = false;
                row[j].isHidden = false;
            }
        }
    };
    GameComponent.prototype.openCard = function (cell) {
        var _this = this;
        if (cell.isOpen == true || this.openCards.length >= 2) {
            return;
        }
        else if (cell.isOpen == false && this.openCards.length == 0) {
            this.openCards.push(cell);
            cell.isOpen = true;
        }
        else if (cell.isOpen == false && this.openCards.length == 1) {
            this.openCards.push(cell);
            cell.isOpen = true;
            setTimeout(function () {
                for (var i = 0; i < _this.openCards.length; i++) {
                    var element = _this.openCards[i];
                    element.isOpen = false;
                    if (_this.openCards[0].cardImage == cell.cardImage) {
                        element.isHidden = true;
                    }
                }
                _this.openCards = [];
                _this.gameOver();
            }, 1000);
        }
    };
    GameComponent.prototype.resetTimer = function () {
        this.m = 0;
        this.s = 0;
        this.ms = 0;
        if (this.ms < 10) {
            this.timerDisplay.ms = "0" + this.ms;
        }
        else {
            this.timerDisplay.ms = this.ms.toString();
        }
        if (this.s < 10) {
            this.timerDisplay.s = "0" + this.s;
        }
        else {
            this.timerDisplay.s = this.s.toString();
        }
        if (this.m < 10) {
            this.timerDisplay.m = "0" + this.m;
        }
        else {
            this.timerDisplay.m = this.m.toString();
        }
    };
    GameComponent.prototype.timer = function () {
        this.ms++;
        if (this.ms > 9) {
            this.ms = 0;
            this.s++;
        }
        if (this.s > 59) {
            this.s = 0;
            this.m++;
        }
        if (this.ms < 10) {
            this.timerDisplay.ms = "0" + this.ms;
        }
        else {
            this.timerDisplay.ms = this.ms.toString();
        }
        if (this.s < 10) {
            this.timerDisplay.s = "0" + this.s;
        }
        else {
            this.timerDisplay.s = this.s.toString();
        }
        if (this.m < 10) {
            this.timerDisplay.m = "0" + this.m;
        }
        else {
            this.timerDisplay.m = this.m.toString();
        }
    };
    GameComponent.prototype.startGame = function () {
        this.gameIsStarted = true;
        this.resetTimer();
        this.timerInterval = setInterval(this.timer, 100);
    };
    GameComponent.prototype.gameOver = function () {
        var _this = this;
        var gameIsOver = true;
        for (var i = 0; i < this.gameBoard.length; i++) {
            var row = this.gameBoard[i];
            for (var j = 0; j < row.length; j++) {
                if (row[j].isHidden == false) {
                    gameIsOver = false;
                }
            }
        }
        if (gameIsOver == true) {
            clearInterval(this.timerInterval);
            setTimeout(function () {
                _this.loadBoard();
                _this.gameIsFinished = true;
                _this.gameIsStarted = false;
            }, 700);
        }
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-card {\r\n    margin: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card main-card\">\n    <img class=\"card-img-top\" src=\"../../assets/mainImage.JPG\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">משחק הזיכרון</h5>\n      <p class=\"card-text\">\n       \n        ברוכים הבאים למשחק הזיכרון!\n        <br>\n        בואו לאמן את המוח ולשפר את החשיבה והזיכרון שלכם עם משחק זכרון מאתגר. משחק זיכרון לילדים וגם למבוגרים. \n        <br>\n        משחק הזיכרון (מוכר גם בשם זוגות) הוא משחק חשיבה לילדים שמטרתו להתאים זוגות קלפים תוך שימוש בזיכרון.\n\nבמשחק זה המשתתפים פורסים חבילת קלפים, המורכבת מזוגות זהים של קלפים, כאשר התמונה כלפי מטה. כל שחקן בתורו מרים שני קלפים במטרה למצוא שני קלפים זהים. אם שני הקלפים זהים, השחקן יקח את הקלפים אליו והם ייצברו לזכותו, אחרת יחזיר את הקלפים למקומם כאשר פניהם כלפי מטה. בתחילת המשחק, סביר כי יתקשו המשתתפים למצוא שני קלפים זהים, אך ככל שמספר הניסיונות עולה, כך המשתתפים זוכרים את צורת הקלף ומיקומו.\n      </p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/httpService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/httpService.ts ***!
  \*****************************************/
/*! exports provided: httpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpService", function() { return httpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpService = /** @class */ (function () {
    function httpService(http) {
        this.http = http;
        this.rootUrl = 'http://localhost/MemoryGameWebApi/api/';
    }
    httpService.prototype.signUp = function (user) {
        var body = {
            "FullName": "FullName",
            "UserName": "UserName",
            "Password": "Password",
            "Email": "Email",
            "UserId": 2
        };
        var headerOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'Test1', JSON.stringify(body), {
            headers: headerOptions,
            withCredentials: true
        });
        // return this.http.post(this.rootUrl + 'SignUp', body, {
        //     headers: { 'Content-Type':'application/x-www-form-urlencoded' }
        //  });
    };
    httpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], httpService);
    return httpService;
}());

/*
, {
            headers: {'Content-Type':'application/json' },
            withCredentials: true
         }
*/ 


/***/ }),

/***/ "./src/app/top-rated/top-rated.component.css":
/*!***************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1yYXRlZC90b3AtcmF0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ag-grid-angular \n    style=\"width: 100%; height: 100%;\" \n    class=\"ag-theme-balham\"\n    [rowData]=\"rowData\" \n    [columnDefs]=\"columnDefs\"\n    (gridSizeChanged)=\"fixColumnWidth($event)\"\n    >\n</ag-grid-angular>"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.ts":
/*!**************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.ts ***!
  \**************************************************/
/*! exports provided: TopRatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponent", function() { return TopRatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent() {
        this.columnDefs = [
            { headerName: 'תאריך ושעת המשחק', field: 'make' },
            { headerName: 'שם השחקן', field: 'model' },
            { headerName: 'זמן משחק', field: 'price' },
            { headerName: 'מספר צעדים', field: 'price' }
        ];
        this.rowData = [];
    }
    TopRatedComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    TopRatedComponent.prototype.fixColumnWidth = function (grid) {
        var allColumnIds = [];
        grid.columnApi.getAllColumns().forEach(function (column) {
            allColumnIds.push(column.colId);
        });
        grid.columnApi.autoSizeColumns(allColumnIds);
        grid.api.sizeColumnsToFit();
    };
    TopRatedComponent.prototype.loadData = function () {
        this.rowData = [];
    };
    TopRatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-rated',
            template: __webpack_require__(/*! ./top-rated.component.html */ "./src/app/top-rated/top-rated.component.html"),
            styles: [__webpack_require__(/*! ./top-rated.component.css */ "./src/app/top-rated/top-rated.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopRatedComponent);
    return TopRatedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MemoryGame\MemoryGame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map