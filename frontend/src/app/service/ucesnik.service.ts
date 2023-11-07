import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UcesnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/ucesnik'

  dohvatiUcesnika(korisnickoIme){
    let data = {
      korisnickoIme: korisnickoIme
    }

    return this.http.post(`${this.uri}/dohvatiUcesnika`,data)
  }

  izmeniUcesnika(korisnickoIme,korisnickoImeNovo, ime, prezime, telefon, email, slika){

    let data = {
      korisnickoIme: korisnickoIme,
      korisnickoImeNovo: korisnickoImeNovo,
      ime: ime,
      prezime: prezime,
      telefon: telefon,
      email: email,
      slika:slika
    }

    return this.http.post(`${this.uri}/izmeniUcesnika`,data)
    
  }

  dohvatiRadionicuPoID(id){
    let data = {
      id:id
    }
    return this.http.post(`${this.uri}/dohvatiRadionicuPoID`, data)
  }

  dohvatiKomentarPoID(id){
    let data = {
      id:id
    }
    return this.http.post(`${this.uri}/dohvatiKomentarPoID`, data)
  }

  dohvatiSveRadionice(){
    return this.http.get(`${this.uri}/dohvatiSveRadionice`)
  }

  prijaviMeNaRadionicu(korisnickoIme, idRadionice){
    let data={
      korisnickoIme:korisnickoIme,
      idRadionice:idRadionice
    }

    return this.http.post(`${this.uri}/prijaviMeNaRadionicu`, data)
  }

  lajk(idRadionice, brLajkova){
    let data = {
      idRadionice:idRadionice,
      brLajkova: brLajkova
    }

    return this.http.post(`${this.uri}/lajk`, data)
  }

  promeniLozinku(korisnickoIme,lozinka){
    const data = {
      korisnickoIme: korisnickoIme,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/promeniLozinku`,data)
  }

  azurirajKomentar(id, tekst){
    const data = {
      id: id,
      tekst:tekst
    }
    return this.http.post(`${this.uri}/azurirajKomentar`,data)
  }

  obrisiKomentar(id, korisnickoIme,idString){
    const data = {
      id:id,
      korisnickoIme:korisnickoIme,
      idString:idString
    }

    return this.http.post(`${this.uri}/obrisiKomentar`,data)
  }

  odlajkuj(id, korisnickoIme){
    const  data = {
      id:id,
      korisnickoIme:korisnickoIme
    }

    return this.http.post(`${this.uri}/odlajkuj`,data)
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
      status:0
    }
    return this.http.post(`${this.uri}/dodajRadionicu`,data);
  }

  posaljiPorukuOrganizatoru(ucesnik,organizator,tekst){
    const data = {
      ucesnik:ucesnik,
      organizator:organizator,
      tekst:tekst,
      datum:new Date(),
      fleg:1
    }
    return this.http.post(`${this.uri}/posaljiPorukuOrganizatoru`,data);
  }

  dodajSliku(slika, korisnickoIme){
    const data = {
      slika:slika,
      korisnickoIme:korisnickoIme
    }
    return this.http.post(`${this.uri}/dodajSliku`,data);

  }
}

