import { Component, OnInit } from '@angular/core';
import { httpService } from '../services/httpService';
import { ToastyService } from 'ng2-toasty';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameBoard = [];
  openCards = [];
  Images = [];
  timerInterval;
  CountOfSteps = 0;
  gameIsStarted = false;
  gameIsFinished = false;
  myGlobals = myGlobals;
  m = 0;
  s = 0;
  ms = 0;
  timerDisplay = { m: '00', s: '00', ms: '00' };

  constructor(private httpService: httpService,
    private toastyService: ToastyService) {
    this.resetTimer = this.resetTimer.bind(this);
    this.timer = this.timer.bind(this);
    this.gameOver = this.gameOver.bind(this);
    if (this.myGlobals.LoginUser == null) {
      window.location.href = '/';
    }
  }

  ngOnInit() {
    this.httpService.GetImages().subscribe((data:any) => {
      this.Images = data;
      this.loadBoard(data);
    },
      err => {

      });

  }

  loadBoard(images) {
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

    for (let i = 0; i < this.gameBoard.length; i++) {
      var row = this.gameBoard[i];
      for (let j = 0; j < row.length; j++) {
        var randIndex = Math.floor(Math.random() * images.length);
        row[j].cardImage = '../../assets/' + images.splice(randIndex, 1)[0].ImageName;
        row[j].isOpen = false;
        row[j].isHidden = false;
      }
    }
  }

  openCard(cell) {
    if (cell.isOpen == true || this.openCards.length >= 2) {
      return;
    } else if (cell.isOpen == false && this.openCards.length == 0) {
      this.openCards.push(cell);
      cell.isOpen = true;
    } else if (cell.isOpen == false && this.openCards.length == 1) {
      this.CountOfSteps++;
      this.openCards.push(cell);
      cell.isOpen = true;
      setTimeout(() => {
        for (let i = 0; i < this.openCards.length; i++) {
          const element = this.openCards[i];
          element.isOpen = false;
          if (this.openCards[0].cardImage == cell.cardImage) {
            element.isHidden = true;
          }
        }
        this.openCards = [];
        this.gameOver();
      }, 1000);
    }
  }

  resetTimer() {
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
  }

  timer() {

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
  }

  startGame() {
    this.CountOfSteps = 0;
    this.gameIsStarted = true;
    this.resetTimer();
    this.timerInterval = setInterval(this.timer, 100);
  }

  gameOver() {
    var gameIsOver = true;
    for (let i = 0; i < this.gameBoard.length; i++) {
      var row = this.gameBoard[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j].isHidden == false) {
          gameIsOver = false;
        }
      }
    }
    if (gameIsOver == true) {
      clearInterval(this.timerInterval);
      setTimeout(() => {
        this.httpService.SaveGameResult({
          UserId: this.myGlobals.LoginUser.UserId,
          GameDuration: (this.ms + (this.s * 100) + (this.m * 60 * 100)),
          CountOfSteps: this.CountOfSteps
        }).subscribe(data => {
          if (data == true) {
            this.toastyService.success({
              title: "סיום משחק",
              msg: "תוצאות המשחק נשמרו בהצלחה!",
              showClose: true,
              timeout: 3000,
              theme: 'default'
            });
    
          }
        },
          err => {
            this.toastyService.error({
              title: "סיום משחק",
              msg: "התרחשה תקלה!",
              showClose: true,
              timeout: 3000,
              theme: 'default'
            });
          });
        this.loadBoard(this.Images);
        this.gameIsFinished = true;
        this.gameIsStarted = false;
      }, 700);
    }
  }
}
