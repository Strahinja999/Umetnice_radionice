import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-promeni-lozinku-u',
  templateUrl: './promeni-lozinku-u.component.html',
  styleUrls: ['./promeni-lozinku-u.component.css']
})
export class PromeniLozinkuUComponent implements OnInit{

  ngOnInit(): void {
    this.ucesnik = JSON.parse(localStorage.getItem('ulogovan'))
  }

  constructor(private ucesnikServis:UcesnikService, private ruter:Router){}

  ucesnik:Ucesnik


  staraLozinka:string
  novaLozinka:string
  potvrdaLozinke:string

  poruka:string

  regex = /([A-Z])+(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?\- "]).*$/;

  promeniLozinku(){
    if(this.staraLozinka != this.ucesnik.lozinka){
      this.poruka = "Pogresno uneta stara lozinka!"
    }else if(!this.regex.test(this.novaLozinka)){
      this.poruka = "Nova lozinka nije u dobrom formatu!"
    }else if(this.novaLozinka != this.potvrdaLozinke){
      this.poruka = "Lozinke se ne poklapaju!"
    }else{
      this.poruka= ""
      this.ucesnikServis.promeniLozinku(this.ucesnik.korisnickoIme, this.novaLozinka).subscribe((resp)=>{
        alert(resp["message"])
        localStorage.clear()
        this.ruter.navigate([''])
      })
    }
  }

}
