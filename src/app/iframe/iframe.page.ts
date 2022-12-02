import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  openUrl() {
    let url = 'https://ionicframework.com/';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
