import { identifierName } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { Organizator } from 'src/app/model/organizator.model';
import { Poruka } from 'src/app/model/poruka';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { OrganizatorService } from 'src/app/service/organizator.service';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-poruke',
  templateUrl: './poruke.component.html',
  styleUrls: ['./poruke.component.css']
})
export class PorukeComponent implements OnInit{
 
  ngOnInit(): void {

    this.organizatorServis.dohvatiOrganizatora(localStorage.getItem('korisnik')).subscribe((o:Organizator)=>{
      if(o){
        this.organizator = o
        this.poruke = this.organizator.poruke
        for(let i = 0; i<this.poruke.length;i++){
          if(this.porukeSaUcesnicima.length == 0){
            this.porukeSaUcesnicima.push(this.poruke[i].ucesnik)
          }else{
            if(!this.porukeSaUcesnicima.includes(this.poruke[i].ucesnik))
              this.porukeSaUcesnicima.push(this.poruke[i].ucesnik)
          }
        }
      }
    })

  }

  constructor(private organizatorServis:OrganizatorService, private ucesnikServis:UcesnikService){}

  organizator:Organizator

  poruke:Array<Poruka>
  porukePrikaz:Array<Poruka>

  porukeSaUcesnicima:Array<String> = new Array<String>

  prikaziDugme:boolean=false

  tekstPoruke:string
  porukaGreska:string
  ucesnikPoruke:Ucesnik

  prikaziPoruke(ucesnik){
    localStorage.setItem('ucesnikOdgovor',ucesnik)
    this.ucesnikServis.dohvatiUcesnika(ucesnik).subscribe((u:Ucesnik)=>{
      this.ucesnikPoruke = u
      })
    this.prikaziDugme = true
    this.porukePrikaz = new Array<Poruka>
    for(let i = 0; i < this.poruke.length;i++){
      if(this.poruke[i].ucesnik == ucesnik)
        this.porukePrikaz.push(this.poruke[i])
    }
  }

  posalji(){
    if(this.tekstPoruke == '' || typeof this.tekstPoruke == 'undefined'){
      this.porukaGreska = "Morate uneti tekst poruke!"
    }else{
      this.organizatorServis.posaljiPorukuUcesniku(localStorage.getItem('ucesnikOdgovor'),this.organizator.korisnickoIme,this.tekstPoruke).subscribe((resp)=>{
        alert(resp["message"])
      })
    }
  }

}
