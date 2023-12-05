import { Component } from '@angular/core';
import { RoomService } from 'src/app/servisi/room.service';
import { Smestaj } from 'src/app/model/smestaj.interface';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent {
  brojNoci: number = 1;
  odabraniSmestaj: Smestaj = this.roomService.odabraniSmestaj;
  ukupnaCena: number = this.roomService.getPrice(this.brojNoci);

  constructor(private roomService: RoomService){}

  otkazi(){
    this.roomService.toggleRezervacijaPolje();
  }

  promeniBrojNoci() {
    this.ukupnaCena = this.roomService.getPrice(this.brojNoci);
  }

}
