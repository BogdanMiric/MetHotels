import { Component } from '@angular/core';
import { Smestaj } from 'src/app/model/smestaj.interface';
import { RoomService } from 'src/app/servisi/room.service';

@Component({
  selector: 'app-smestaji',
  templateUrl: './smestaji.component.html',
  styleUrls: ['./smestaji.component.css']
})
export class SmestajiComponent {
  smestaji: Smestaj[] = [];

  constructor(public roomService: RoomService) {
    this.smestaji = roomService.smestaji;
  }

  dodajNoviSmestaj(noviSmestaj: any): void {
    this.roomService.dodajNoviSmestaj(noviSmestaj);
  }
}
