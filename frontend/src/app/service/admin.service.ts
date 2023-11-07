import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/admin'

  dohvatiSveUcesnike(){
    return this.http.get(`${this.uri}/dohvatiSveUcesnike`);
  }

  dohvatiUcesnika(korisnickoIme){
    const data = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/dohvatiUcesnika`,data);
  }

  dodajUcesnika(korisnickoIme, lozinka, ime, prezime,telefon,email){
    const data = {
      korisnickoIme:korisnickoIme,
      lozinka:lozinka, 
      ime:ime,
      prezime:prezime,
      telefon:telefon,
      email:email,
      odobreno: 1,
      radionicePrisustvovao:Array<String>,
      radioniceLajkovao:Array<String>,
      komentari: Array<String>,
      trenutnoPrijavljen:Array<String>,
      poruke:Array<Object>
    }

    return this.http.post(`${this.uri}/dodajUcesnika`,data)
  }

  izmeniUcesnika(korisnickoImeStaro,korisnickoIme, lozinka, ime, prezime, telefon, email){
    let data = {
      korisnickoImeStaro:korisnickoImeStaro,
      korisnickoIme: korisnickoIme,
      lozinka: lozinka,
      ime: ime,
      prezime: prezime,
      telefon: telefon, 
      email: email
    }

    return this.http.post(`${this.uri}/izmeniUcesnika`,data)
  }

  obrisiUcesnika(koriscnikoIme){
    const data = {
      koriscnikoIme:koriscnikoIme
    }

    return this.http.post(`${this.uri}/obrisiUcesnika`,data)
  }

  dohvatiOrganizatora(korisnickoIme){
    const data = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/dohvatiOrganizatora`,data);
  }

  dodajOrganizatora(korisnickoIme, lozinka, naziv, maticniBroj, drzava, grad, postanskiBroj, ulica, broj,telefon,email){
    const data = {
      korisnickoIme:korisnickoIme,
      lozinka:lozinka, 
      naziv:naziv,
      maticniBroj:maticniBroj,
      drzava:drzava,
      grad:grad,
      postanskiBroj:postanskiBroj,
      ulica:ulica,
      broj:broj,
      telefon:telefon,
      email:email,
      odbreno: 1
    }

    return this.http.post(`${this.uri}/dodajOrganizatora`,data);
  }

  izmeniOrganizatora(korisnickoImeStaro,korisnickoIme,lozinka,naziv,drzava,grad,postanskiBroj,ulica,broj,telefon,email,maticniBroj){
    const data = {
      korisnickoImeStaro:korisnickoImeStaro,
      korisnickoIme:korisnickoIme,
      lozinka:lozinka,
      naziv:naziv,
      drzava:drzava,
      grad:grad,
      postanskiBroj:postanskiBroj,
      ulica:ulica,
      broj:broj,
      telefon:telefon,
      email:email,
      maticniBroj:maticniBroj
    }
    return this.http.post(`${this.uri}/izmeniOrganizatora`,data)
  }

  obrisiOrganizatora(koriscnikoIme){
    const data = {
      koriscnikoIme:koriscnikoIme
    }

    return this.http.post(`${this.uri}/obrisiOrganizatora`,data)
  }

  dohvatiSveOrganizatore(){
    return this.http.get(`${this.uri}/dohvatiSveOrganizatore`);
  }

  dohvatiKorisnika(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/dohvatiKorisnika`,data);
  }

  prihvatiUcesnika(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/prihvatiUcesnika`,data);
  }

  odbiUcesnika(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/odbiUcesnika`,data);
  }

  prihvatiOrganizatora(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/prihvatiOrganizatora`,data);
  }

  odbiOrganizatora(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/odbiOrganizatora`,data);
  }

  dohvatiSveRadionice(){
    return this.http.get(`${this.uri}/dohvatiSveRadionice`)
  }
 
  obrisiRadionicu(id){
    const data = {
      id:id
    }
    return this.http.post(`${this.uri}/obrisiRadionicu`,data);
  }

  dodajRadionicu(naziv,datum,mesto,kratakOpis,id,dugacakOpis,brMesta,organizator){
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
      status:1
    }
    return this.http.post(`${this.uri}/dodajRadionicu`,data);
  }

  izmeniRadionicu(id, organizator, naziv, kratakOpis, dugacakOpis, mestoOdrzavanja,datum,ukupnoMesta ){
    const data = {
      id:id,
      organizator:organizator,
      naziv:naziv,
      kratakOpis:kratakOpis,
      dugacakOpis:dugacakOpis,
      mestoOdrzavanja:mestoOdrzavanja,
      datum:datum,
      ukupnoMesta:ukupnoMesta
    }
    return this.http.post(`${this.uri}/izmeniRadionicu`,data);
  }

  odobriRadionicuUcesnik(id, organizator){
    const data = {
      id:id,
      organizator:organizator
    }

    return this.http.post(`${this.uri}/odobriRadionicuUcesnik`,data);
  }

  odobriRadionicuOrganizator(id){
    const data = {
      id:id
    }
    return this.http.post(`${this.uri}/odobriRadionicuOrganizator`,data);

  }

}
