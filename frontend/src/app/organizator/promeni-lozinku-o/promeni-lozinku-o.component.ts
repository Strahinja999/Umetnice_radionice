import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizator } from 'src/app/model/organizator.model';
import { OrganizatorService } from 'src/app/service/organizator.service';

@Component({
  selector: 'app-promeni-lozinku-o',
  templateUrl: './promeni-lozinku-o.component.html',
  styleUrls: ['./promeni-lozinku-o.component.css']
})
export class PromeniLozinkuOComponent implements OnInit{

  ngOnInit(): void {
    this.organizator = JSON.parse(localStorage.getItem('ulogovan'))
  }

  constructor(private organizatorServis:OrganizatorService, private ruter:Router){}

  organizator:Organizator

  staraLozinka:string
  novaLozinka:string
  potvrdaLozinke:string

  poruka:string

  regex = /([A-Z])+(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?\- "]).*$/;

  promeniLozinku(){
    if(this.staraLozinka != this.organizator.lozinka){
      this.poruka = "Pogresno uneta stara lozinka!"
    }else if(!this.regex.test(this.novaLozinka)){
      this.poruka = "Nova lozinka nije u dobrom formatu!"
    }else if(this.novaLozinka != this.potvrdaLozinke){
      this.poruka = "Lozinke se ne poklapaju!"
    }else{
      this.poruka= ""
      this.organizatorServis.promeniLozinku(this.organizator.korisnickoIme, this.novaLozinka).subscribe((resp)=>{
        alert(resp["message"])
        localStorage.clear()
        this.ruter.navigate([''])
      })
    }
  }

}
