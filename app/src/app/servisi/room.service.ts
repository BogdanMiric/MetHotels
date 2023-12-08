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
    const id = this.smestaji.length + 1;
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


}
