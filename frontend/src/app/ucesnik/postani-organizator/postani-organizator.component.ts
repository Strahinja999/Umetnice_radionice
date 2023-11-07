import { Component, OnInit } from '@angular/core';
import { Radionica } from 'src/app/model/radionica.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-postani-organizator',
  templateUrl: './postani-organizator.component.html',
  styleUrls: ['./postani-organizator.component.css']
})
export class PostaniOrganizatorComponent implements OnInit{

  ngOnInit(): void {
    this.ucesnik = JSON.parse(localStorage.getItem('ulogovan'))
    this.ucesnikServis.dohvatiSveRadionice().subscribe((r:Radionica[])=>{
      if(r){
        this.radionice = r
        this.radionice.sort((r1, r2)=>{return r1.id-r2.id})
      }
    })  
  }

  constructor(private ucesnikServis:UcesnikService){}

  radionice:Radionica[]
  ucesnik:Ucesnik

  naziv:string
  datum:Date
  mesto:string
  kratakOpis:string
  dugacakOpis:string
  brojMesta:number

  porukaGreska:string
  porukaUspesno:string

  predlozi(){
    if(this.naziv == '' || typeof this.naziv == 'undefined' ||
    typeof this.datum == 'undefined' ||
    this.kratakOpis == '' || typeof this.kratakOpis == 'undefined' ||
    this.dugacakOpis == '' || typeof this.dugacakOpis == 'undefined' ||
    this.mesto == '' || typeof this.mesto == 'undefined' ||
    typeof this.brojMesta == 'undefined'
    ) this.porukaGreska = "Svi podaci moraju biti uneti!"
    else{
      this.porukaGreska = ""
      this.ucesnikServis.dodajRadionicu(this.naziv,this.datum,this.mesto,this.kratakOpis,this.radionice[this.radionice.length -1].id+1,this.dugacakOpis,this.brojMesta,this.ucesnik.korisnickoIme).subscribe((resp)=>{
        this.porukaUspesno = resp['message']
      })
    }
  }

}
