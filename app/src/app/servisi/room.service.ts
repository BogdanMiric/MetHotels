import { Injectable } from '@angular/core';
import { Smestaj } from 'src/app/model/smestaj.interface';
import { RestService } from './rest.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  smestaji: Smestaj[] = [];
  odabraniSmestaj: Smestaj;

  //konstruktor
  constructor(private restService: RestService) {
    this.ucitajSmestaje();
  }

  // kreiranje liste koja ce se emitovati
  private _smestaji: BehaviorSubject<Smestaj[]> = new BehaviorSubject<Smestaj[]>([]);
  public readonly smestaji$ = this._smestaji.asObservable();

  ucitajSmestaje() {
    this.restService.getItems().subscribe((data: any) => {
      if (data) {
        this.smestaji = Object.keys(data).map(key => {
          const { id: dokumentId, naziv, tipSobe, cena, brojKreveta, dodatneOpcije } = data[key];
          return new Smestaj(
            key,
            naziv,
            tipSobe,
            parseFloat(cena),
            parseInt(brojKreveta),
            dodatneOpcije || []
          );
        });
        this._smestaji.next(this.smestaji); //emitovanje nove verzije liste
      } else {
        this.smestaji = [];
        this._smestaji.next(this.smestaji);
        console.log('nema podataka u bazi');
      }
    });
  }

  dodajNoviSmestaj(noviSmestaj: any): void {
    const smestaj = new Smestaj('', noviSmestaj.naziv, noviSmestaj.tipSobe, noviSmestaj.cena, noviSmestaj.brojKreveta, noviSmestaj.dodatneOpcije);
    this.restService.addItem(smestaj).subscribe(() => {
      console.log('Nova stavka uspešno dodata!');
      this.ucitajSmestaje();
    });
  }

  ukloniSmestaj(key: string) {
    this.restService.deleteItem(key.toString()).subscribe(() => {
      console.log('Smestaj uspešno obrisan!');
      this.ucitajSmestaje();
    });
  }

  azurirajSmestaj(key: string, azuriranSmestaj: any): void {
    this.restService.updateItem(key, azuriranSmestaj).subscribe(() => {
      this.ucitajSmestaje();
    });
  }

  //ostale funkcije...

  getPrice(numberOfNights: number) {
    return numberOfNights * this.odabraniSmestaj.cena;
  }

  // show-hide
  rezervacijaPolje: boolean = false;
  azuriranjePolje: boolean = false;
  toggleRezervacijaPolje() {
    this.rezervacijaPolje = !this.rezervacijaPolje;
  }
  toggleAzuriranje() {
    this.azuriranjePolje = !this.azuriranjePolje;
  }


  // popuniBazu() {
  //   const smestaji: Smestaj[] = [
  //     new Smestaj('', 'Hotel A', 'Jednokrevetna', 80, 1, ['Klima', 'TV']),
  //     new Smestaj('', 'Pansion B', 'Dvokrevetna', 120, 2, ['Mini bar', 'WiFi']),
  //     new Smestaj('', 'Apartmani C', 'Porodicna', 200, 4, ['Sauna', 'WiFi']),
  //     new Smestaj('', 'Motel D', 'Soba sa bazenom', 150, 2, ['Klima', 'TV', 'WiFi']),
  //     new Smestaj('', 'Seosko domacinstvo E', 'Kuća za odmor', 100, 3, ['TV']),
  //     new Smestaj('', 'Vila F', 'Luksuzni apartman', 300, 2, ['Mini bar', 'Sauna', 'WiFi']),
  //     new Smestaj('', 'Hostel G', 'Dormitory', 40, 6, ['WiFi']),
  //     new Smestaj('', 'Penzioner H', 'Soba sa zajedničkom kupatilom', 30, 1, ['TV']),
  //     new Smestaj('', 'B&B I', 'Soba sa doručkom', 90, 2, ['Mini bar', 'Klima', 'WiFi']),
  //     new Smestaj('', 'Gostinjska kuća J', 'Soba u privatnom domu', 60, 1, ['WiFi']),
  //     new Smestaj('', 'Planinska Koliba K', 'Planinska kuća', 90, 5, ['Klima', 'Sauna']),
  //     new Smestaj('', 'Eko-selo L', 'Eko bungalov', 110, 2, ['WiFi']),
  //     new Smestaj('', 'Bazen Lux M', 'Vila sa bazenom', 250, 3, ['Klima', 'TV', 'Mini bar']),
  //     new Smestaj('', 'Apartmani N', 'Apartman sa pogledom na more', 180, 2, ['WiFi']),
  //     new Smestaj('', 'Kuca na jezeru O', 'Vikendica', 120, 4, ['TV', 'Mini bar']),
  //     new Smestaj('', 'Planinska Vila P', 'Vila u planinama', 300, 6, ['Klima', 'Sauna', 'TV', 'WiFi']),
  //     new Smestaj('', 'Seoska kuća Q', 'Seoska kuća', 80, 3, ['Klima', 'WiFi']),
  //     new Smestaj('', 'Prenoćište R', 'Soba za prenoćište', 50, 1, ['WiFi']),
  //     new Smestaj('', 'Vikendica S', 'Planinska vikendica', 140, 4, ['Klima', 'Mini bar', 'TV']),
  //     new Smestaj('', 'Apartman T', 'Moderan apartman', 200, 2, ['Sauna', 'WiFi']),
  //   ];
  //   smestaji.forEach((smestaj) => {
  //     this.restService.addItem(smestaj).subscribe(() => {
  //       console.log('Nova stavka uspešno dodata!');
  //     });
  //   });
  //   this.ucitajSmestaje();
  // }

}
