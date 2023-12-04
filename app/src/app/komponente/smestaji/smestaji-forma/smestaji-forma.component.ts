import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-smestaji-forma',
  templateUrl: './smestaji-forma.component.html',
  styleUrls: ['./smestaji-forma.component.css']
})
export class SmestajiFormaComponent {
  @Output() dodajSmestaj: EventEmitter<any> = new EventEmitter();
  @ViewChild('smestajForm') smestajForm: NgForm;


  naziv: string;
  tipSobe: string;
  cena: number;
  brojKreveta: number;
  dodatneOpcije: string[];

  povecanjeRacuna: number;
  isPovecanRacun: boolean;

  constructor() {
    this.naziv = '';
    this.tipSobe = '';
    this.cena = 0;
    this.brojKreveta = 0;
    this.dodatneOpcije = [];
    this.povecanjeRacuna = 0;
    this.isPovecanRacun = false;
  }

  onSubmit(): void {
    if (this.smestajForm.valid) {
      this.povecanjeRacuna = 0;
      this.dodatneOpcije = [];

      //Provera da li su opcije cekirane i dodavanje u listu ako jesu
      if(this.smestajForm.value.klima){
        this.dodatneOpcije.push('Klima');
        this.povecanjeRacuna += 5;
      }
      if(this.smestajForm.value.miniBar){
        this.dodatneOpcije.push('Mini bar');
        this.povecanjeRacuna += 10;
      }
      if(this.smestajForm.value.sauna){
        this.dodatneOpcije.push('Sauna');
        this.povecanjeRacuna += 15;
      }
      if(this.smestajForm.value.tv){
        this.dodatneOpcije.push('TV');
        this.povecanjeRacuna += 5;
      }
      if(this.smestajForm.value.wifi){
        this.dodatneOpcije.push('Wi-Fi');
        this.povecanjeRacuna += 5;
      }

      //Povecanje racuna na dodatne opcije
      if(this.dodatneOpcije.length !== 0){
        this.isPovecanRacun = true;
      }

      const noviSmestaj = {
        naziv: this.smestajForm.value.naziv,
        tipSobe: this.smestajForm.value.tipSobe,
        cena: this.smestajForm.value.cena + this.povecanjeRacuna,
        brojKreveta: this.smestajForm.value.brojKreveta,
        dodatneOpcije: this.dodatneOpcije
      };

      this.dodajSmestaj.emit(noviSmestaj);
      this.smestajForm.reset();
    } else {
      console.log('Forma nije validna. Molimo popunite ispravno sva polja.');
    }

  }
}
