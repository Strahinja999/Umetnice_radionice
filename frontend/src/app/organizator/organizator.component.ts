import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizator } from '../model/organizator.model';
import { OrganizatorService } from '../service/organizator.service';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css']
})
export class OrganizatorComponent implements OnInit{

  ngOnInit(): void {
    this.organizatorServis.dohvatiOrganizatora(localStorage.getItem('korisnik')).subscribe((o:Organizator)=>{
      this.organizator = o
    })
  }

  constructor(private ruter: Router, private organizatorServis:OrganizatorService) {}

  organizator:Organizator

  trenutniKontekst:string = 'radionice';

  promeniKontekst(kontekst:string){
    this.trenutniKontekst = kontekst;
  }

  odjaviSe(){
    localStorage.clear()
    this.ruter.navigate([''])
  }

}


