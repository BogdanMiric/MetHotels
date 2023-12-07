export class Smestaj {
  key: string; // Dodati atribut key
  naziv: string;
  tipSobe: string;
  cena: number;
  brojKreveta: number;
  dodatneOpcije: string[];

  constructor(
    key: string, // Dodati key kao prvi argument konstruktora
    naziv: string,
    tipSobe: string,
    cena: number,
    brojKreveta: number,
    dodatneOpcije: string[] 
  ) {
    this.key = key; // Postaviti vrednost za key
    this.naziv = naziv;
    this.tipSobe = tipSobe;
    this.cena = cena;
    this.brojKreveta = brojKreveta;
    this.dodatneOpcije = dodatneOpcije;
  }
}
