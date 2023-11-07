import { Component, OnInit } from '@angular/core';
import { Komentar } from 'src/app/model/komentar.model';
import { Organizator } from 'src/app/model/organizator.model';
import { Poruka } from 'src/app/model/poruka';
import { Radionica } from 'src/app/model/radionica.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { OrganizatorService } from 'src/app/service/organizator.service';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-profil-pregled',
  templateUrl: './profil-pregled.component.html',
  styleUrls: ['./profil-pregled.component.css']
})
export class ProfilPregledComponent implements OnInit{

  constructor(private ucesnikServis: UcesnikService,private organizatorServis:OrganizatorService) {}

  ngOnInit(): void {
    this.ucesnikServis.dohvatiUcesnika(localStorage.getItem('korisnik')).subscribe((data: Ucesnik)=>{
      if(data){
        this.ucesnik = data
        this.poruke = data.poruke
        this.radionicePrisustvovao = data.radionicePrisustvovao
        this.radioniceKomentarisao = data.komentari
        this.radioniceLajkovao = data.radioniceLajkovao
        //DODAVANJE RADIONICA KOJIMA JE UCESNIK PRISUSTVOVAO
        for (let i = 0;i < this.radionicePrisustvovao.length;i++){
          this.ucesnikServis.dohvatiRadionicuPoID(parseInt(this.radionicePrisustvovao[i])).subscribe((data: Radionica) =>{
            if(data){
              let l = this.radioniceP.push(data)
            }
          })
        }
        //DODAVANJE SVIH KOMENTARA UCESNIKA
        for(let i = 0; i<this.radioniceKomentarisao.length;i++){
          this.ucesnikServis.dohvatiKomentarPoID(parseInt(this.radioniceKomentarisao[i])).subscribe((data: Komentar) =>{
            if(data){
              let l = this.komentari.push(data)
            }
          })
        }
        //DODAVANJE RADIONICA KOJE SE SVIDJAJU KORISNIKU
        for(let i = 0; i<this.radioniceLajkovao.length;i++){
          this.ucesnikServis.dohvatiRadionicuPoID(parseInt(this.radioniceLajkovao[i])).subscribe((data: Radionica) =>{
            if(data){
              let l = this.radioniceL.push(data)
            }
          })
        }
        for(let i = 0; i <data.poruke.length;i++){
          if(this.porukeSaOgranizatorima.length == 0){
            this.porukeSaOgranizatorima.push(data.poruke[i].organizator)
          }else{
            if(!this.porukeSaOgranizatorima.includes(data.poruke[i].organizator)){
              this.porukeSaOgranizatorima.push(data.poruke[i].organizator)
            }
            
          } 
        }

      }else{
        alert("NE RADI")
      }
    })
  }

  korisnickoIme: string;
  ucesnik: Ucesnik;

  radionicePrisustvovao: Array<string>
  radioniceKomentarisao: Array<string>
  radioniceLajkovao: Array<string>
  poruke: Array<Poruka>
  porukePrikaz:Array<Poruka>
  radioniceP:Radionica[] = new Array()    //niz radionica kojima je ucesnik prisustvovao
  radioniceL:Radionica[] = new Array()    //niz radionica koje je ucesnik lajkovao
  komentari:Komentar[] = new Array()     //niz komentara ucesnika

  organizatori:Array<String>
  porukeSaOgranizatorima:Array<String> = new Array<String>
  orgazniazatorPoruke:Organizator

  azurirajKomentarBool:boolean = false
  novTekstKomentara:string
  

  sortirajPoNazivu(){
    this.radioniceP = this.radioniceP.sort((a,b) =>{
      if(a.naziv>b.naziv) return 1;
      if(a.naziv<b.naziv) return -1;
      return 0
    })
  }

  sortirajPoOpisu(){
    this.radioniceP = this.radioniceP.sort((a,b) =>{
      if(a.kratakOpis>b.kratakOpis) return 1;
      if(a.kratakOpis<b.kratakOpis) return -1;
      return 0
    })
  }

  sortirajPoMestu(){
    this.radioniceP = this.radioniceP.sort((a,b) =>{
      if(a.mestoOdrzavanja>b.mestoOdrzavanja) return 1;
      if(a.mestoOdrzavanja<b.mestoOdrzavanja) return -1;
      return 0
    })
  }

  sortirajPoDatumu(){
    this.radioniceP = this.radioniceP.sort((a,b) =>{
      if(a.datum > b.datum) return 1;
      if(a.datum < b.datum) return -1;
      return 0
    })
  }

  azurirajKomentar(){
    /*if(this.azurirajKomentarBool == true) this.azurirajKomentarBool = false
    else this.azurirajKomentarBool = true*/
  }
  azurirajKomentarID(id){
    /*this.ucesnikServis.azurirajKomentar(id, this.novTekstKomentara).subscribe((resp)=>{
      window.location.reload()
    })*/
    
  }

  obrisiKomentar(id){
    /*this.ucesnikServis.obrisiKomentar(id, this.ucesnik.korisnickoIme,id.toString).subscribe((resp) =>{
      window.location.reload()
    })*/
  }

  odlajkuj(id){
    /*this.ucesnikServis.odlajkuj(parseInt(id), this.ucesnik.korisnickoIme).subscribe((resp)=>{
      alert(resp["message"])
    })*/
  }

  prikaziPoruke(organizator){
    this.porukePrikaz = new Array<Poruka>
    this.organizatorServis.dohvatiOrganizatora(organizator).subscribe((o:Organizator)=>{
      this.orgazniazatorPoruke = o
    })
    for(let i = 0; i <this.poruke.length;i++){
      if(this.poruke[i].organizator == organizator)
        this.porukePrikaz.push(this.poruke[i])
    }
  }

}
