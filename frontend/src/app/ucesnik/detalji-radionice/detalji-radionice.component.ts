import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { Radionica } from 'src/app/model/radionica.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-detalji-radionice',
  templateUrl: './detalji-radionice.component.html',
  styleUrls: ['./detalji-radionice.component.css']
})
export class DetaljiRadioniceComponent implements OnInit{

  constructor(private ucesnikServis:UcesnikService, private ruter:Router){}

  ngOnInit(): void {
    this.ucesnik = JSON.parse(localStorage.getItem('ulogovan'))
    this.ucesnikServis.dohvatiRadionicuPoID(localStorage.getItem('idRadionice')).subscribe((data:Radionica) =>{
      if(data){
        this.radionica = data
        if(this.radionica.rezervisanaMesta < this.radionica.ukupnoMesta) this.imaMesta = true
        else this.imaMesta = false
        this.listaCekanja = data.listaCekanja
        for(let i = 0; i < this.listaCekanja.length; i++){
          if(this.listaCekanja[i] == localStorage.getItem('korisnik')){
            this.prijavljen = true
          }
        }
      }
    })

  }

  radionica:Radionica
  ucesnik:Ucesnik

  imaMesta: boolean = false
  prijavljen: boolean = false
  obavesten: boolean = false

  listaCekanja: Array<string> = new Array()

  tekstPoruke:string
  porukaGreska:string


  lajk(){
    alert(this.radionica.lajkovi+1)
    this.ucesnikServis.lajk(this.radionica.id, this.radionica.lajkovi + 1). subscribe(resp=>{
      alert(resp['poruka'])
      window.location.reload()
    })
  }

  prijaviMe(){
    this.ucesnikServis.prijaviMeNaRadionicu(localStorage.getItem('korisnik'),this.radionica.id).subscribe(resp=>{
      //alert(resp['poruka'])
      window.location.reload();
    })

  }
 
  obavestiMe(){

  }

  nazad(){
    this.ruter.navigate(['ucesnik'])
  }

  posalji(){
    if(this.tekstPoruke == '' || typeof this.tekstPoruke == 'undefined'){
      this.porukaGreska = "Morate uneti tekst poruke!"
    }else{
      this.ucesnikServis.posaljiPorukuOrganizatoru(this.ucesnik.korisnickoIme,this.radionica.organizator,this.tekstPoruke).subscribe((resp)=>{
        //alert(resp["message"])
      })
    }
  }


  


}
