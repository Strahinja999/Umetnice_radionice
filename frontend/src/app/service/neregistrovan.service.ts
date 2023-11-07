import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NeregistrovanService {

  constructor(private http:HttpClient) { }

  uri = 'http://localhost:4000/neregistrovan'

  dohvatiSveRadionice(){
    return this.http.get(`${this.uri}/dohvatiSveRadionice`)
  }

  dohvatiRadionicePoNazivu(naziv:string){
    let data = {
      naziv: naziv
    }
    return this.http.post(`${this.uri}/dohvatiPoNazivu`, data)
  }

  dohvatiRadionicePoGradu(grad:string){
    let data = {
      grad: grad
    }
    return this.http.post(`${this.uri}/dohvatiPoGradu`, data)
  }

  dohvatiRadionicePoNazivuIGradu(naziv: string, grad:string){
    let data = {
      naziv: naziv,
      grad: grad
    }
    return this.http.post(`${this.uri}/dohvatiPoNazivuIGradu`, data)
  }

}
