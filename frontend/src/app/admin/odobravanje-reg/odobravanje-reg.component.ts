import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizator } from 'src/app/model/organizator.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-odobravanje-reg',
  templateUrl: './odobravanje-reg.component.html',
  styleUrls: ['./odobravanje-reg.component.css']
})
export class OdobravanjeRegComponent implements OnInit{
  ngOnInit(): void {
    this.adminServis.dohvatiSveUcesnike().subscribe((data: Ucesnik[])=>{
      this.ucesnici = data;
    })
    this.adminServis.dohvatiSveOrganizatore().subscribe((data: Organizator[])=>{
      this.organizatori = data;
    })
  }

   
  
  constructor(private adminServis: AdminService, private ruter:Router){}

  

  ucesnici: Ucesnik[]
  organizatori: Organizator[]


  odbiUcesnika(korisnickoIme){
    this.adminServis.odbiUcesnika(korisnickoIme).subscribe(res => {})
    window.location.reload();
    
  }

  prihvatiUcesnika(korisnickoIme){
    this.adminServis.prihvatiUcesnika(korisnickoIme).subscribe(res => {})
    window.location.reload();
  }

  odbiOrganizatora(korisnickoIme){
    this.adminServis.odbiOrganizatora(korisnickoIme).subscribe(res => {})
    window.location.reload();
  }

  prihvatiOrganizatora(korisnickoIme){
    this.adminServis.prihvatiOrganizatora(korisnickoIme).subscribe(res => {})
    window.location.reload();
  }
}
