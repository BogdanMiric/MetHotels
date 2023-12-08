export class Smestaj {
  key: string;
  naziv: string;
  tipSobe: string;
  cena: number;
  brojKreveta: number;
  dodatneOpcije: string[];

  constructor(
    key: string,
    naziv: string,
    tipSobe: string,
    cena: number,
    brojKreveta: number,
    dodatneOpcije: string[] 
  ) {
    this.key = key;
    this.naziv = naziv;
    this.tipSobe = tipSobe;
    this.cena = cena;
    this.brojKreveta = brojKreveta;
    this.dodatneOpcije = dodatneOpcije;
  }
}
