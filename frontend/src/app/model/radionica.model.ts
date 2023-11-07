export class Radionica{
    id:number;
    naziv:string;
    datum:Date;
    mestoOdrzavanja: string;
    kratakOpis:string;
    dugacakOpis:string;
    ukupnoMesta:number;
    rezervisanaMesta:number;
    lajkovi:number
    listaCekanja:Array<string>
    listaPrijavljenih:Array<string>
    listaOdobrenih:Array<string>
    organizator:string
    status:number
    slika:string
}