import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizatorService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/organizator'

  dohvatiMojeRadionice(korisnickoIme){
    let data = {
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/dohvatiMojeRadionice`, data)
  }

  dohvatiSveRadionice(){
    return this.http.get(`${this.uri}/dohvatiSveRadionice`)
  }

  dohvatiRadionicuPoID(id){
    let data = {
      id:id
    }
    return this.http.post(`${this.uri}/dohvatiRadionicuPoID`, data)
  }

  izmeniRadionicu(id,naziv, mesto, datum, kratakOpis, dugacakOpis, brojMesta, slika){
    let data = {
      id:id,
      naziv: naziv,
      mesto: mesto, 
      datum: datum,
      kratakOpis: kratakOpis,
      dugacakOpis: dugacakOpis,
      brojMesta:brojMesta,
      slika:slika
    }

    return this.http.post(`${this.uri}/izmeniRadionicu`, data)

  }

  odbiKorisnika(id, korisnickoIme){
    let data = {
      
      id: id,
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/odbiKorisnika`,data)
  }

  odobriKorisnika(id, korisnickoIme,strId){
    let data = {
      strId:strId,
      id:id,
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/odobriKorisnika`,data)
  }

  otkazi(id){
    let data = {
      id:id
    }

    return this.http.post(`${this.uri}/otkazi`,data)
  }

  promeniLozinku(korisnickoIme,lozinka){
    const data = {
      korisnickoIme: korisnickoIme,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/promeniLozinku`,data)
  }

  dodajRadionicu(naziv,datum,mesto,kratakOpis,id,dugacakOpis,brMesta,organizator, slika){
    const data = {
      naziv:naziv,
      datum:datum,
      mestoOdrzavanja:mesto,
      kratakOpis:kratakOpis,
      id:id,
      dugacakOpis:dugacakOpis,
      ukupnoMesta:brMesta,
      organizator:organizator,
      rezervisanaMesta: 0,
      lajkovi:0,
      listaCekanja:Array<String>,
      listaOdobrenih:Array<String>,
      listaPrijavljenih:Array<String>,
      status:0,
      slike:slika
    }
    return this.http.post(`${this.uri}/dodajRadionicu`,data);
  }

  dohvatiOrganizatora(korisnickoIme){
    const data = {
      korisnickoIme:korisnickoIme
    }
    return this.http.post(`${this.uri}/dohvatiOrganizatora`,data);
  }

  posaljiPorukuUcesniku(ucesnik, organizator,tekst){
    const data = {
      ucesnik:ucesnik,
      organizator:organizator,
      tekst:tekst,
      datum:new Date(),
      fleg:0
    }

    return this.http.post(`${this.uri}/posaljiPorukuUcesniku`,data);
  }

}
