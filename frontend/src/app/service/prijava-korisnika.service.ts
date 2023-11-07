import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrijavaKorisnikaService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000/prijava'

  prijava(korisnickoIme, lozinka){
    let data = {
      korisnickoIme : korisnickoIme,
      lozinka : lozinka
    }

    return this.http.post(`${this.uri}/prijava`, data)

  }

  prijavaAdmin(korisnickoIme, lozinka){
    let data = {
      korisnickoIme : korisnickoIme,
      lozinka : lozinka
    }

    return this.http.post(`${this.uri}/prijavaAdmin`, data)
  }
}
