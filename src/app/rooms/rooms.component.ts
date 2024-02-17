import { Component, OnInit } from '@angular/core';
import { roomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

 rooms : roomList[]=[
  {
    roomNumber:1001,
    roomType : 'Deluxe',
    roomPrice:1000,
    checkinTime:new Date('12/23/2023')
  },
  {
    roomNumber:1002,
    roomType : 'Suite',
    roomPrice:2000,
    checkinTime:new Date('01/25/2024')
  },
  {
    roomNumber:1003,
    roomType : 'General',
    roomPrice:500,
    checkinTime:new Date('01/02/2024')
  }
 ]

 


}
