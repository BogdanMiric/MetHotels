import { Component, Output, EventEmitter, ViewChild, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomService } from 'src/app/servisi/room.service';
import { Smestaj } from 'src/app/model/smestaj.interface';

@Component({
  selector: 'app-azuriranje-smestaja',
  templateUrl: './azuriranje-smestaja.component.html',
  styleUrls: ['./azuriranje-smestaja.component.css']
})
export class AzuriranjeSmestajaComponent{
  @Output() dodajSmestaj: EventEmitter<any> = new EventEmitter();
  @ViewChild('forma') forma: NgForm;

  defaultNaziv: string = '';
  defaultTipSobe: string = '';
  defaultCena: number = 0;
  defaultBrojKreveta: number = 0;

  dodatneOpcije: string[];
  povecanjeRacuna: number;

  constructor(private roomService:  RoomService) {
    this.defaultNaziv = this.roomService.odabraniSmestaj.naziv.toString();
    this.defaultTipSobe = this.roomService.odabraniSmestaj.tipSobe;
    this.defaultCena = this.roomService.odabraniSmestaj.cena;
    this.defaultBrojKreveta = this.roomService.odabraniSmestaj.brojKreveta;

    this.dodatneOpcije = [];
    this.povecanjeRacuna = 0;
  }

  submitForm() {
    if(this.forma.valid){
      if(this.forma.value.klima){
        this.dodatneOpcije.push('Klima');
        this.povecanjeRacuna += 5;
      }
      if(this.forma.value.miniBar){
        this.dodatneOpcije.push('Mini bar');
        this.povecanjeRacuna += 10;
      }
      if(this.forma.value.sauna){
        this.dodatneOpcije.push('Sauna');
        this.povecanjeRacuna += 15;
      }
      if(this.forma.value.tv){
        this.dodatneOpcije.push('TV');
        this.povecanjeRacuna += 5;
      }
      if(this.forma.value.wifi){
        this.dodatneOpcije.push('Wi-Fi');
        this.povecanjeRacuna += 5;
      }

      const azuriraniSmestaj = {
        naziv: this.forma.value.naziv,
        tipSobe: this.forma.value.tipSobe,
        cena: this.forma.value.cena + this.povecanjeRacuna,
        brojKreveta: this.forma.value.brojKreveta,
        dodatneOpcije: this.dodatneOpcije
      };
      
      this.roomService.azurirajSmestaj(this.roomService.odabraniSmestaj.key, azuriraniSmestaj);
      this.forma.reset();
      this.roomService.toggleAzuriranje();
    }else{
      console.log('Forma nije validna.');
    }
  }

  otkazi(){
    this.roomService.toggleAzuriranje();
  }

}
