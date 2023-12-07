import { Component, OnInit } from '@angular/core';
import { Smestaj } from 'src/app/model/smestaj.interface';
import { RoomService } from 'src/app/servisi/room.service';

@Component({
  selector: 'app-smestaji',
  templateUrl: './smestaji.component.html',
  styleUrls: ['./smestaji.component.css']
})
export class SmestajiComponent implements OnInit{
  smestaji: Smestaj[] = [];

  constructor(public roomService: RoomService) {
  }

  ngOnInit() {
    this.roomService.smestaji$.subscribe((smestaji: Smestaj[]) => {
      this.smestaji = smestaji;
    });
  }

  dodajNoviSmestaj(noviSmestaj: any): void {
    this.roomService.dodajNoviSmestaj(noviSmestaj);
  }
}
