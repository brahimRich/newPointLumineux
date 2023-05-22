import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  embedConfig: pbi.IEmbedConfiguration;
  reportContainer!: HTMLElement;
  report!: pbi.Embed | undefined;

  constructor() {
    this.embedConfig = {} as pbi.IEmbedConfiguration;
  }

  ngOnInit() {
    this.reportContainer = document.getElementById('reportContainer')!;

    this.embedConfig = {
      type: '',
      id: '',
      embedUrl: '',
      accessToken: ''
    };

  }
}
