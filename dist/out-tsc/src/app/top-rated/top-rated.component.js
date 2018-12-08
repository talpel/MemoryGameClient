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
var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.columnDefs = [
            { headerName: 'תאריך ושעת המשחק', field: 'GameDateTime', cellRenderer: function (param) {
                    var x = new Date(param.value);
                    var dd = x.getDate();
                    var mm = x.getMonth() + 1;
                    var yy = x.getFullYear();
                    var hh = x.getHours();
                    var min = x.getMinutes();
                    return _this.pad(hh, 2) + ":" + _this.pad(min, 2) + "   " + dd + "/" + mm + "/" + yy;
                } },
            { headerName: 'שם השחקן', field: 'Users.UserName' },
            { headerName: 'זמן משחק', field: 'GameDuration', cellRenderer: function (param) {
                    var ms = Math.floor(param.value % 100);
                    var s = Math.floor((param.value / 100) % 60);
                    var m = Math.floor((param.value / 100) / 60);
                    return _this.pad(m, 2) + ':' + _this.pad(s, 2) + ':' + _this.pad(ms, 2);
                } },
            { headerName: 'מספר צעדים', field: 'CountOfSteps' }
        ];
        this.rowData = [];
    }
    TopRatedComponent.prototype.pad = function (n, width) {
        var z = '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };
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
        var _this = this;
        this.rowData = [];
        this.httpService.GetGameResult().subscribe(function (data) {
            _this.rowData = data;
        }, function (err) {
        });
    };
    TopRatedComponent = __decorate([
        Component({
            selector: 'app-top-rated',
            templateUrl: './top-rated.component.html',
            styleUrls: ['./top-rated.component.css']
        }),
        __metadata("design:paramtypes", [httpService])
    ], TopRatedComponent);
    return TopRatedComponent;
}());
export { TopRatedComponent };
//# sourceMappingURL=top-rated.component.js.map