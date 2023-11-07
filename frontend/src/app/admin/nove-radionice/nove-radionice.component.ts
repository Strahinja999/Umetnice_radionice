import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/model/korisnik.model';
import { Radionica } from 'src/app/model/radionica.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-nove-radionice',
  templateUrl: './nove-radionice.component.html',
  styleUrls: ['./nove-radionice.component.css']
})
export class NoveRadioniceComponent implements OnInit{

  ngOnInit(): void {
    this.adminServis.dohvatiSveRadionice().subscribe((r:Radionica[])=>{
      for(let i =0;i<r.length;i++){
        if(r[i].status == 0) this.radionice.push(r[i])
      }
    })
  }

  constructor(private adminServis:AdminService){}

  radionice:Radionica[] = new Array<Radionica>

  porukaGreska:string
  porukaUspesno:string

  prihvati(r){
    this.adminServis.dohvatiKorisnika(r.organizator).subscribe((k:Korisnik)=>{
      if(k.tip == 1){
        //ucesnik
        this.adminServis.dohvatiUcesnika(r.organizator).subscribe((u:Ucesnik)=>{
          if(u.trenutnoPrijavljen.length != 0){
            this.porukaGreska="Ucesnik " + u.korisnickoIme+" ima prijavljenih radionica! Nije moguce izvrsiti odobravanje radionice"
          }else{
            this.adminServis.odobriRadionicuUcesnik(r.id,r.organizator).subscribe((resp)=>{
              this.porukaUspesno = resp["message"]
            })
          }
        })
      }else if(k.tip == 2){
        //organizator
        this.adminServis.odobriRadionicuOrganizator(r.id).subscribe((resp)=>{
          this.porukaUspesno = resp["message"]
        })
      }
    })
  }

  odbi(id){
    alert(id)
  }

}
