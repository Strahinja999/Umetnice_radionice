import { Poruka } from "./poruka";

export class Organizator{
    korisnickoIme : string;
    lozinka : string;
    naziv: string;
    maticniBroj:string;
    drzava: string;
    grad: string;
    postanskiBroj: string;
    ulica: string;
    broj: number;
    telefon: string;
    email:string;
    odobreno: number;
    radionice:Array<number>
    poruke:Array<Poruka>
    slika:string
}