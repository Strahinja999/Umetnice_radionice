import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { PrijavaKorisnikaService } from '../service/prijava-korisnika.service';

@Component({
  selector: 'app-admin-prijava',
  templateUrl: './admin-prijava.component.html',
  styleUrls: ['./admin-prijava.component.css']
})
export class AdminPrijavaComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private prijavaServis: PrijavaKorisnikaService, private ruter:Router){}

  korisnickoIme: string;
  lozinka: string;

  greskaPoruka: string;

  prijavaAdmin(){
    this.prijavaServis.prijavaAdmin(this.korisnickoIme, this.lozinka).subscribe((admin: Korisnik) =>{
      if(admin){
        if(admin.tip == 0){
          localStorage.setItem('admin', this.korisnickoIme)
          this.ruter.navigate(['/admin']);
        }else{
          this.greskaPoruka = "Korisnik nema administratorske privilegije"
        }
      }else{
        this.greskaPoruka = "Pogresno uneti podaci"
      }
    })
  }

}
