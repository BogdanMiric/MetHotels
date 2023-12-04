export class Smestaj {
  id: number;
  naziv: string;
  tipSobe: string;
  cena: number;
  brojKreveta: number;
  dodatneOpcije: string[];

  constructor(
    id: number,
    naziv: string,
    tipSobe: string,
    cena: number,
    brojKreveta: number,
    dodatneOpcije: string[] 
  ) {
    this.id = id;
    this.naziv = naziv;
    this.tipSobe = tipSobe;
    this.cena = cena;
    this.brojKreveta = brojKreveta;
    this.dodatneOpcije = dodatneOpcije;
  }
}