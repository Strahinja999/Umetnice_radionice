import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistracijaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/registracija'

  pronadjiKorisnika(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/pronadjiKorisnika`, data)
    
  }

  pronadjiUcesnikaEmail(email){
    let data = {
      email: email
    }

    return this.http.post(`${this.uri}/pronadjiUcesnikaEmail`, data)
    
  }

  pronadjiOrganizatoraEmail(email){
    let data = {
      email: email
    }

    return this.http.post(`${this.uri}/pronadjiOrganizatoraEmail`, data)
    
  }

  registracijaUcesnik(korisnickoIme,lozinka,ime,prezime,telefon,email,tip, slika){
    let data = {
      korisnickoIme: korisnickoIme,
      lozinka: lozinka,
      ime: ime,
      prezime: prezime,
      telefon: telefon,
      email: email,
      tip: tip,
      slika:slika
    }

    return this.http.post(`${this.uri}/registracijaUcesnik`, data)

  }

  registracijaOrganizator(korisnickoIme,lozinka,naziv,maticniBroj,drzava,grad,postanskiBroj,ulica,broj,telefon,email,tip,slika){
    let data = {
      korisnickoIme: korisnickoIme,
      lozinka:lozinka,
      naziv: naziv,
      maticniBroj:maticniBroj,
      drzava: drzava,
      grad: grad,
      postanskiBroj: postanskiBroj,
      ulica: ulica,
      broj: broj,
      telefon: telefon,
      email:email,
      tip:tip,
      slika:slika
    }

    return this.http.post(`${this.uri}/registracijaOrganizator`, data)
  }

  dodajSlikuUcesnk(slika, korisnickoIme){
    const data = {
      slika: slika,
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/dodajSlikuUcesnk`, data)

  }

  dodajSlikuOrganizator(slika, korisnickoIme){
    const data = {
      slika: slika,
      korisnickoIme: korisnickoIme
    }
    return this.http.post(`${this.uri}/dodajSlikuOrganizator`, data)

  }

}
