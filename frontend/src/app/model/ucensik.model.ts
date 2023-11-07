import { Poruka } from "./poruka";

export class Ucesnik{
    korisnickoIme : string;
    lozinka : string;
    ime: string;
    prezime: string;
    telefon: string;
    email:string;
    odobreno: number;
    radionicePrisustvovao:Array<string>
    komentari:Array<string>
    radioniceLajkovao:Array<string>
    trenutnoPrijavljen:Array<string>
    poruke:Array<Poruka>
    slika:String
}