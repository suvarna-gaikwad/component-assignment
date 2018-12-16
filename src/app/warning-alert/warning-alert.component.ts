import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  //templateUrl: './warning-alert.component.html',
  template: '<h1>Warning</h1>',
  //styleUrls: ['./warning-alert.component.css']
  styles: [`
    h1 {
      color: yellow;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
