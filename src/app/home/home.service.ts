import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  messageList = [
    {
      id: 1,
      desc: 'detail 1',
      isRead: 0
    },
    {
      id: 2,
      desc: 'detail 2',
      isRead: 0
    },
    {
      id: 3,
      desc: 'detail 3',
      isRead: 0
    },
  ];

  constructor() { }

  findAll() {
    return this.messageList;
  }

  messageIsRead(id: number) {
    this.messageList.map(msg => {
      if (msg.id == id) {
        msg.isRead = 1;
      }
    })
  }

}
