import { Injectable } from '@angular/core';
import { Smestaj } from 'src/app/model/smestaj.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  smestaji: Smestaj[] = []; 
  rezervacijaPolje: boolean = false;
  odabraniSmestaj: Smestaj;

  toggleRezervacijaPolje(){
    this.rezervacijaPolje = !this.rezervacijaPolje;
  }

  constructor() { 
    this.smestaji = [
      new Smestaj(
        1,
        'Dvokrevetna soba',
        'Standardna soba',
        80,
        2,
        ['Klima', 'TV']
      ),
      new Smestaj(
        2,
        'Porodični apartman',
        'Apartman',
        150,
        4,
        ['Klima', 'Mini bar', 'WiFi', 'Sauna']
      ),
      new Smestaj(
        3,
        'Luksuzna soba',
        'Superior soba',
        120,
        2,
        ['Klima', 'TV', ]
      ),
      new Smestaj(
        4,
        'Jednokrevetna soba',
        'Standardna soba',
        60,
        1,
        ['TV']
      ),
      new Smestaj(
        5,
        'Deluks apartman',
        'Apartman',
        200,
        3,
        ['Klima', 'TV', 'Sauna']
      ),
    ];
  }

  dodajNoviSmestaj(noviSmestaj: any): void {
    const id = this.smestaji.length + 1;
    const smestaj = new Smestaj(id, noviSmestaj.naziv, noviSmestaj.tipSobe, noviSmestaj.cena, noviSmestaj.brojKreveta, noviSmestaj.dodatneOpcije);
    this.smestaji.push(smestaj);
  }

  getPrice(numberOfNights: number){
    return numberOfNights * this.odabraniSmestaj.cena;
  }

}
