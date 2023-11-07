import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Ucesnik } from '../model/ucensik.model';
import { NeregistrovanService } from '../service/neregistrovan.service';
import { UcesnikService } from '../service/ucesnik.service';

@Component({
  selector: 'app-ucesnik',
  templateUrl: './ucesnik.component.html',
  styleUrls: ['./ucesnik.component.css']
})
export class UcesnikComponent implements OnInit{

  constructor(private ruter: Router, private ucesnikServis:UcesnikService) {}

  ngOnInit(): void {
    this.trenutniKontekst = 'radionice'
    this.ucesnikServis.dohvatiUcesnika(localStorage.getItem('korisnik')).subscribe((u:Ucesnik)=>{
      this.ucesnik = u
    })
  }

  ucesnik:Ucesnik
  trenutniKontekst:string = 'radionice';

  odjaviSe(){
    localStorage.clear()
    this.ruter.navigate([''])
  }

  promeniKontekst(kontekst:string){
    this.trenutniKontekst = kontekst;
  }


}
