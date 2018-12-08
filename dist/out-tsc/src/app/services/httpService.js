var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpService = /** @class */ (function () {
    function httpService(http) {
        this.http = http;
        this.rootUrl = '/api/';
    }
    httpService.prototype.signUp = function (user) {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'SignUp', JSON.stringify(user), {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.login = function (user) {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'Login', JSON.stringify(user), {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.SaveGameResult = function (gameResult) {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'SaveGameResult', JSON.stringify(gameResult), {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.GetGameResult = function () {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.rootUrl + 'GetGameResult', {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.GetImages = function () {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.rootUrl + 'GetImages', {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.InsertFeedback = function (feedback) {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'InsertFeedback', JSON.stringify(feedback), {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.GetFeedbacks = function () {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(this.rootUrl + 'GetFeedbacks', {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService.prototype.SendMessage = function (message) {
        var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + 'SendMessage', JSON.stringify(message), {
            headers: headerOptions,
            withCredentials: true
        });
    };
    httpService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], httpService);
    return httpService;
}());
export { httpService };
//# sourceMappingURL=httpService.js.map