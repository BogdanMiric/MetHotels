import { Component, Input } from '@angular/core';
import { Smestaj } from 'src/app/model/smestaj.interface';
import { RoomService } from 'src/app/servisi/room.service';

@Component({
  selector: 'app-smestaji-tabela',
  templateUrl: './smestaji-tabela.component.html',
  styleUrls: ['./smestaji-tabela.component.css']
})
export class SmestajiTabelaComponent {
  @Input() smestaji: Smestaj[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  constructor(private roomService: RoomService) { }

  rezervisi(smestaj: Smestaj) {
    this.roomService.toggleRezervacijaPolje();
    this.roomService.odabraniSmestaj = smestaj;
    console.log(smestaj.naziv);
    console.log(smestaj.cena);
  }

  ukloni(smestajKey: string) {
    this.roomService.ukloniSmestaj(smestajKey);
    console.log('obrisano');
  }

  izmeni(smestaj: Smestaj) {
    this.roomService.toggleAzuriranje();
    this.roomService.odabraniSmestaj = smestaj;
  }

  onTableDataChange(event: any){
    this.page = event;
    this.roomService.ucitajSmestaje();
  }

}
