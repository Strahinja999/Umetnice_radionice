import { JsonPipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { PrijavaKorisnikaService } from '../service/prijava-korisnika.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit{

  korisnickoIme : string;
  lozinka: string;

  greskaPoruka : string;

  ngOnInit(): void {}

  constructor(private prijavaServis: PrijavaKorisnikaService, private ruter: Router) {}

  

  prijava(){

    if( typeof this.korisnickoIme == 'undefined' || typeof this.lozinka == 'undefined'){
      this.greskaPoruka = "Svi podaci moraju biti popunjeni!"
    }else{
      this.prijavaServis.prijava(this.korisnickoIme, this.lozinka).subscribe((korisnik : Korisnik) =>{
        if(korisnik){
          localStorage.setItem('korisnik', this.korisnickoIme)
          localStorage.setItem('ulogovan', JSON.stringify(korisnik))
          if(korisnik.odobreno == 0){
            this.ruter.navigate(['/neregistrovan'])
          }else{
            switch(korisnik.tip){
              case 1: {
                this.ruter.navigate(['/ucesnik']);
                break;
              }
              case 2: {
                this.ruter.navigate(['/organizator']);
                break;
              }
              default: this.greskaPoruka = "Pogrešno uneti podaci"
            }
          }
          }else{
            this.greskaPoruka = "Korisnik ne postoji!"
          }
      })
    }
    
  }
    
}
