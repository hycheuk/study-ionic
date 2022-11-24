import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {}

  openWithSystemBrowser() {
    let url = 'https://ionicframework.com/';
    let target = "_system";
    this.iab.create(url, target);
  }
  openWithCordovaBrowser() {
    let url = 'https://ionicframework.com/';
    let target = "_self";
    this.iab.create(url, target);
  }

  openWithInAppBrowser() {
    let url = 'https://ionicframework.com/';
    let target = "_blank";
    this.iab.create(url, target)
    // const browser = this.iab.create('https://ionicframework.com/');

    // browser.executeScript({});

    // browser.insertCSS({});
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "body{color: red;" });
    // });

    // browser.close();
  }

}
