import { Component, Input, OnInit } from '@angular/core';
import { roomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() rooms : roomList[]=[];
}
