import { Component, OnInit } from '@angular/core';
import { httpService } from '../services/httpService';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  pad(n, width) {
    var z = '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  columnDefs = [
    { headerName: 'תאריך ושעת המשחק', field: 'GameDateTime', cellRenderer: (param) => {
      var x= new Date(param.value);
      var dd = x.getDate();
      var mm = x.getMonth()+1;
      var yy = x.getFullYear();
      var hh = x.getHours();
      var min = x.getMinutes();
      return this.pad(hh,2) + ":" + this.pad(min,2) + "   " +  dd +"/" + mm+"/" + yy;

  } },
    { headerName: 'שם המשתמש', field: 'Users.UserName' },
    { headerName: 'שם מלא', field: 'Users.FullName' },
    { headerName: 'זמן משחק', field: 'GameDuration', cellRenderer: (param) => {
      var ms = Math.floor(param.value % 100);
      var s =  Math.floor((param.value / 100) % 60);
      var m =  Math.floor((param.value / 100) / 60);
        return this.pad(m,2) + ':' + this.pad(s,2) + ':' + this.pad(ms,2);
    } },
    { headerName: 'מספר צעדים', field: 'CountOfSteps' }
  ];

  rowData = [];

  constructor(private httpService: httpService) { }

  ngOnInit() {
    this.loadData();
  }

  fixColumnWidth(grid) {
    var allColumnIds = [];
    grid.columnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    grid.columnApi.autoSizeColumns(allColumnIds);
    grid.api.sizeColumnsToFit();
  }

  loadData() {
    this.rowData = [];
    this.httpService.GetGameResult().subscribe((data:any) => {
      this.rowData = data;
    },
      err => {

      });
  }
}
