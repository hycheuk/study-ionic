import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/users.entities';
import { UsersService } from '../users/users.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: User[] = [];

  constructor(
    private iab: InAppBrowser,
    private router: Router,
    private homeService: HomeService,
    private userService: UsersService
  ) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getUsers();
  }

  // in app browser 
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
  }

  // message list
  getAll() {
    return this.homeService.findAll()
  }
  loadMessageCount() {
    return this.homeService.findAll().filter(msg => (msg.isRead == 0)).length;
  }
  viewDetail(id: number) {
    this.homeService.messageIsRead(id);
    this.router.navigate(['/message', id])
  }

  // http client
  createUser(): void {
    const newUser: CreateUserDto = {
      username: 'Tom',
      password: '123456',
      refreshToken: '',
    }
    this.userService.create(newUser).subscribe(user => {
      console.log(user);
      this.getUsers();
    });

  }

  getUsers()  {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });

    // this.userService.getUsers2();
  }

}
