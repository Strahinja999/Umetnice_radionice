import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export  class AdminComponent implements OnInit {

  ngOnInit(): void {
    this.adminServis.dohvatiKorisnika(localStorage.getItem('admin')).subscribe((u:Korisnik) =>{
      if(u) this.admin =u
    })
  }

  admin: Korisnik
   
  
  constructor(private adminServis: AdminService, private ruter:Router){}


  trenutniKontekst: string = 'odobravanjeRegistracija'

  promeniKontekst(kontekst: string){
    this.trenutniKontekst = kontekst
  }

  odjaviSe(){
    localStorage.removeItem('admin')
    this.ruter.navigate([''])
  }

}
