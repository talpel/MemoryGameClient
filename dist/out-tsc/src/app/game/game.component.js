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
import { httpService } from '../services/httpService';
import { ToastyService } from 'ng2-toasty';
import * as myGlobals from '../globals';
var GameComponent = /** @class */ (function () {
    function GameComponent(httpService, toastyService) {
        this.httpService = httpService;
        this.toastyService = toastyService;
        this.gameBoard = [];
        this.openCards = [];
        this.Images = [];
        this.CountOfSteps = 0;
        this.gameIsStarted = false;
        this.gameIsFinished = false;
        this.myGlobals = myGlobals;
        this.m = 0;
        this.s = 0;
        this.ms = 0;
        this.timerDisplay = { m: '00', s: '00', ms: '00' };
        this.resetTimer = this.resetTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.gameOver = this.gameOver.bind(this);
        if (this.myGlobals.LoginUser == null) {
            window.location.href = '/';
        }
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.GetImages().subscribe(function (data) {
            _this.Images = data;
            _this.loadBoard(data);
        }, function (err) {
        });
    };
    GameComponent.prototype.loadBoard = function (images) {
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
                row[j].cardImage = '../../assets/' + images.splice(randIndex, 1)[0].ImageName;
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
            this.CountOfSteps++;
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
        this.CountOfSteps = 0;
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
                _this.httpService.SaveGameResult({
                    UserId: _this.myGlobals.LoginUser.UserId,
                    GameDuration: (_this.ms + (_this.s * 100) + (_this.m * 60 * 100)),
                    CountOfSteps: _this.CountOfSteps
                }).subscribe(function (data) {
                    if (data == true) {
                        _this.toastyService.success({
                            title: "סיום משחק",
                            msg: "תוצאות המשחק נשמרו בהצלחה!",
                            showClose: true,
                            timeout: 3000,
                            theme: 'default'
                        });
                    }
                }, function (err) {
                    _this.toastyService.error({
                        title: "סיום משחק",
                        msg: "התרחשה תקלה!",
                        showClose: true,
                        timeout: 3000,
                        theme: 'default'
                    });
                });
                _this.loadBoard(_this.Images);
                _this.gameIsFinished = true;
                _this.gameIsStarted = false;
            }, 700);
        }
    };
    GameComponent = __decorate([
        Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css']
        }),
        __metadata("design:paramtypes", [httpService,
            ToastyService])
    ], GameComponent);
    return GameComponent;
}());
export { GameComponent };
//# sourceMappingURL=game.component.js.map