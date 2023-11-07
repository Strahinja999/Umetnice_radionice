import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/model/korisnik.model';
import { Organizator } from 'src/app/model/organizator.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { RegistracijaService } from 'src/app/service/registracija.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit{

  ngOnInit(): void {
    this.adminServis.dohvatiSveUcesnike().subscribe((u:Ucesnik[])=>{
      if(u) this.ucesnici = u
    })
    this.adminServis.dohvatiSveOrganizatore().subscribe((o:Organizator[])=>{
      if(o) this.organizatori = o
    })
  }

  constructor(private adminServis: AdminService, private registracijaServis:RegistracijaService){}

  ucesnici: Ucesnik[]
  organizatori: Organizator[]

  ucesnikAzuriraj: Ucesnik
  organizatorAzuriraj: Organizator

  azurirajUcesnikaBool: boolean = false
  azurirajOrganizatoraBool: boolean = false

  izmeniKorisnickoImeUBool: boolean = false
  izmeniLozinkuUBool: boolean = false
  izmeniImeUBool: boolean = false
  izmeniPrezimeUBool: boolean = false
  izmeniTelefonUBool : boolean = false
  izmeniEmailUBool : boolean = false

  //PODACI ZA AZURIRANJE UCESNIKA
  korisnickoImeNovoU: string
  lozinkaNovaU:string
  imeNovoU:string
  prezimeNovoU:string
  telefonNovU:string
  emailNovU:string

  //PODACI ZA DODAVANJE UCSNIKA
  korImeU:string
  lozU:string
  potvLozU:string
  imeU:string
  prezimeU:string
  telU:string
  emailU:string

  regex = /([A-Z])+(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?\- "]).*$/;

  porukaUcesnik:string
  porukaUcesnikUspesno:string

  
  izmeniKorisnickoImeOBool: boolean = false
  izmeniLozinkuOBool:boolean = false
  izmeniNazivOBool:boolean = false
  izmeniDrzavuOBool:boolean = false
  izmeniGradOBool:boolean = false
  izmeniPostanskiBrojBool:boolean = false
  izmeniUlicuOBool: boolean = false
  izmeniBrojOBool: boolean = false
  izmeniTelefonOBool: boolean = false
  izmeniEmailOBool: boolean = false
  izmeniMaticniBrojOBool: boolean = false

  //PODACI ZA AZURIRANJE ORGANOZATORA
  korisnickoImeNovoO:string
  lozinkaNovaO:string
  nazivNovO:string
  drazavaNovaO:string
  gradNovO:string
  postanskiBrojNovO:string
  ulicaNovaO:string
  brojNovO:number
  telefonNovO:string
  emailNovO:string
  maticniBrojNovO:string

  //PODACI ZA DODAVANJE ORGANIZATORA
  korImeO:string
  lozO:string
  potvLozO:string
  nazivO:string
  drzavaO:string
  gradO:string
  posBrO:string
  ulicaO:string
  brojO:number
  telO:string
  emailO:string
  matBrO:string

  porukaOrganizator:string
  porukaOrganizatorUspesno:string

  dodajUBool:boolean = false
  dodajOBool:boolean = false


  azurirajU(korisnickoIme){
    if(this.azurirajUcesnikaBool) this.azurirajUcesnikaBool = false
    else this.azurirajUcesnikaBool = true
    this.adminServis.dohvatiUcesnika(korisnickoIme).subscribe((u:Ucesnik)=>{
      if(u) this.ucesnikAzuriraj = u
    })
  }

  azurirajO(korisnickoIme){
    if(this.azurirajOrganizatoraBool) this.azurirajOrganizatoraBool = false
    else this.azurirajOrganizatoraBool = true
    this.adminServis.dohvatiOrganizatora(korisnickoIme).subscribe((o:Organizator)=>{
      if(o) this.organizatorAzuriraj = o
    })
  }

  toggleU(data){
    switch(data){
      case "korisnickoIme": {
        if(this.izmeniKorisnickoImeUBool) this.izmeniKorisnickoImeUBool = false
        else this.izmeniKorisnickoImeUBool = true
        this.korisnickoImeNovoU = ''
        break
      }
      case "lozinka": {
        if(this.izmeniLozinkuUBool) this.izmeniLozinkuUBool = false
        else this.izmeniLozinkuUBool = true
        this.lozinkaNovaU = ''
        break
      }
      case "ime": {
        if(this.izmeniImeUBool) this.izmeniImeUBool = false
        else this.izmeniImeUBool = true
        this.imeNovoU = ''
        break
      }
      case "prezime": {
        if(this.izmeniPrezimeUBool) this.izmeniPrezimeUBool = false
        else this.izmeniPrezimeUBool = true
        this.prezimeNovoU = ''
        break
      }
      case "telefon": {
        if(this.izmeniTelefonUBool) this.izmeniTelefonUBool = false
        else this.izmeniTelefonUBool = true
        this.telefonNovU = ''
        break
      }
      case "email": {
        if(this.izmeniEmailUBool) this.izmeniEmailUBool = false
        else this.izmeniEmailUBool = true
        this.emailNovU = ''
        break
      }
    }
  }

  toggleO(data){
    switch(data){
      case "korisnickoIme": {
        if(this.izmeniKorisnickoImeOBool) this.izmeniKorisnickoImeOBool = false
        else this.izmeniKorisnickoImeOBool = true
        this.korisnickoImeNovoO = ''
        break
      }
      case "lozinka": {
        if(this.izmeniLozinkuOBool) this.izmeniLozinkuOBool = false
        else this.izmeniLozinkuOBool = true
        this.lozinkaNovaO =''
        break
      }
      case "naziv": {
        if(this.izmeniNazivOBool) this.izmeniNazivOBool = false
        else this.izmeniNazivOBool = true
        this.nazivNovO = ''
        break
      }
      case "drzava": {
        if(this.izmeniDrzavuOBool) this.izmeniDrzavuOBool = false
        else this.izmeniDrzavuOBool = true
        this.drazavaNovaO = ''
        break
      }
      case "grad": {
        if(this.izmeniGradOBool) this.izmeniGradOBool = false
        else this.izmeniGradOBool = true
        this.gradNovO = ''
        break
      }
      case "postanskiBroj": {
        if(this.izmeniPostanskiBrojBool) this.izmeniPostanskiBrojBool = false
        else this.izmeniPostanskiBrojBool = true
        this.postanskiBrojNovO = ''
        break
      }
      case "ulica": {
        if(this.izmeniUlicuOBool) this.izmeniUlicuOBool = false
        else this.izmeniUlicuOBool = true
        this.ulicaNovaO = ''
        break
      }
      case "broj": {
        if(this.izmeniBrojOBool) this.izmeniBrojOBool = false
        else this.izmeniBrojOBool = true
        this.brojNovO = null
        break
      }
      case "telefon": {
        if(this.izmeniTelefonOBool) this.izmeniTelefonOBool = false
        else this.izmeniTelefonOBool = true
        this.telefonNovO = ''
        break
      }
      case "email": {
        if(this.izmeniEmailOBool) this.izmeniEmailOBool = false
        else this.izmeniEmailOBool = true
        this.emailNovO = ''
        break
      }
      case "maticniBroj": {
        if(this.izmeniMaticniBrojOBool) this.izmeniMaticniBrojOBool = false
        else this.izmeniMaticniBrojOBool = true
        this.maticniBrojNovO = ''
        break
      }
    }
  }

  azurirajUcesnika(){
    if(this.korisnickoImeNovoU == "" || typeof this.korisnickoImeNovoU == 'undefined') this.korisnickoImeNovoU = this.ucesnikAzuriraj.korisnickoIme
    if(this.lozinkaNovaU == "" || typeof this.lozinkaNovaU == 'undefined') this.lozinkaNovaU = this.ucesnikAzuriraj.lozinka
    if(this.imeNovoU == "" || typeof this.imeNovoU == 'undefined') this.imeNovoU = this.ucesnikAzuriraj.ime
    if(this.prezimeNovoU == "" || typeof this.prezimeNovoU == 'undefined') this.prezimeNovoU = this.ucesnikAzuriraj.prezime
    if(this.telefonNovU == "" || typeof this.telefonNovU == 'undefined') this.telefonNovU = this.ucesnikAzuriraj.telefon
    if(this.emailNovU == "" || typeof this.emailNovU == 'undefined') this.emailNovU = this.ucesnikAzuriraj.email

    this.adminServis.izmeniUcesnika(this.ucesnikAzuriraj.korisnickoIme,this.korisnickoImeNovoU, this.lozinkaNovaU, this.imeNovoU,
       this.prezimeNovoU, this.telefonNovU, this.emailNovU).subscribe(resp => {
        alert(resp["message"])
       })
  }

  azurirajOrganizatora(){
    if(this.korisnickoImeNovoO == '' || typeof this.korisnickoImeNovoO == 'undefined') this.korisnickoImeNovoO = this.organizatorAzuriraj.korisnickoIme
    if(this.lozinkaNovaO == '' || typeof this.lozinkaNovaO == 'undefined') this.lozinkaNovaO = this.organizatorAzuriraj.lozinka
    if(this.nazivNovO == '' || typeof this.nazivNovO == 'undefined') this.nazivNovO = this.organizatorAzuriraj.naziv
    if(this.drazavaNovaO == '' || typeof this.drazavaNovaO == 'undefined') this.drazavaNovaO = this.organizatorAzuriraj.drzava
    if(this.gradNovO == '' || typeof this.gradNovO == 'undefined') this.gradNovO = this.organizatorAzuriraj.grad
    if(this.postanskiBrojNovO == '' || typeof this.postanskiBrojNovO == 'undefined') this.postanskiBrojNovO = this.organizatorAzuriraj.postanskiBroj
    if(this.ulicaNovaO == '' || typeof this.ulicaNovaO == 'undefined') this.ulicaNovaO = this.organizatorAzuriraj.ulica
    if(typeof this.brojNovO == 'undefined') this.brojNovO = this.organizatorAzuriraj.broj
    if(this.telefonNovO == '' || typeof this.telefonNovO == 'undefined') this.telefonNovO = this.organizatorAzuriraj.telefon
    if(this.emailNovO == '' || typeof this.emailNovO == 'undefined') this.emailNovO = this.organizatorAzuriraj.email
    if(this.maticniBrojNovO == '' || typeof this.maticniBrojNovO == 'undefined') this.maticniBrojNovO = this.organizatorAzuriraj.maticniBroj

    this.adminServis.izmeniOrganizatora(this.organizatorAzuriraj.korisnickoIme, this.korisnickoImeNovoO, this.lozinkaNovaO, this.nazivNovO,this.drazavaNovaO,this.gradNovO,this.postanskiBrojNovO,
      this.ulicaNovaO,this.brojNovO,this.telefonNovO,this.emailNovO,this.maticniBrojNovO).subscribe(resp=>{
        alert(resp["message"])
      })
  }

  obrisiUcesnika(koriscnikoIme){
    this.adminServis.obrisiUcesnika(koriscnikoIme).subscribe(resp =>{
      alert(resp["message"])
    })
  }

  obrisiOrganizatora(koriscnikoIme){
    this.adminServis.obrisiOrganizatora(koriscnikoIme).subscribe(resp =>{
      alert(resp["message"])
    })
  }

  dodajU(){
    if(this.dodajUBool) this.dodajUBool = false
    else this.dodajUBool = true
  }

  dodajO(){
    if(this.dodajOBool) this.dodajOBool = false
    else this.dodajOBool = true
  }

  dodajUcesnika(){
    if(typeof this.korImeU == 'undefined' ||
    typeof this.lozU == 'undefined' ||
    typeof this.imeU == 'undefined' ||
    typeof this.prezimeU == 'undefined' ||
    typeof this.telU == 'undefined' ||
    typeof this.emailU == 'undefined' ||
    typeof this.potvLozU == 'undefined' 
    ) {
      this.porukaUcesnik = "Svi podaci moraju biti uneti!"
    }
    else{
      this.porukaUcesnik=''
      this.registracijaServis.pronadjiKorisnika(this.korImeU).subscribe((k)=>{
        if(k) this.porukaUcesnik = "Korisnicko ime vec postoji!"
        else{
          if(!this.regex.test(this.lozU)){
            this.porukaUcesnik = "Lozinka nije u dobrom formatu!"
          }else{
            if(this.lozU != this.potvLozU){
              this.porukaUcesnik = "Lozinka i potvrda lozinke se ne podudaraju!"
            }else{
              this.registracijaServis.pronadjiUcesnikaEmail(this.emailU).subscribe((korisnik:Korisnik)=>{
                if(korisnik) this.porukaUcesnik = "Email korisnika vec postoji"
                else{
                  this.adminServis.dodajUcesnika(this.korImeU,this.lozU,this.imeU,this.prezimeU,
                    this.telU,this.emailU).subscribe((resp)=>{
                      this.porukaUcesnikUspesno = resp['message'] 
                      window.location.reload()
                  })
                }
              })
            }
          }
        }
      })
    }
  }
  
  dodajOrganizatora(){
    if(
      typeof this.korImeO == 'undefined' ||
      typeof this.lozO == 'undefined' ||
      typeof this.potvLozO == 'undefined' ||
      typeof this.nazivO == 'undefined' ||
      typeof this.matBrO== 'undefined' ||
      typeof this.drzavaO == 'undefined' ||
      typeof this.gradO == 'undefined' ||
      typeof this.posBrO == 'undefined' ||
      typeof this.ulicaO == 'undefined' ||
      typeof this.brojO == 'undefined' ||
      typeof this.telO == 'undefined' ||
      typeof this.emailO == 'undefined'

    ) this.porukaOrganizator = "Svi podaci moraju biti popunjeni!"
      else{
        this.porukaOrganizator=''
        this.registracijaServis.pronadjiKorisnika(this.korImeO).subscribe((k)=>{
          if(k) this.porukaOrganizator = "Korisnicko ime vec postoji!"
          else{
            if(!this.regex.test(this.lozO)){
              this.porukaOrganizator = "Loznika nije u dobrom formatu!"
            }else{
              if(this.lozO != this.potvLozO) this.porukaOrganizator = "Lozinka i potvrda lozinke se ne podudaraju!"
              else{
                this.registracijaServis.pronadjiOrganizatoraEmail(this.emailO).subscribe((resp)=>{
                  if(resp) this.porukaOrganizator = "Email vec postoji!"
                  else{
                    this.adminServis.dodajOrganizatora(this.korImeO,this.lozO,this.nazivO,this.matBrO,this.drzavaO,
                      this.gradO,this.posBrO,this.ulicaO,this.brojO,this.telO,this.emailO).subscribe((resp)=>{
                        this.porukaOrganizatorUspesno = resp["message"]
                      })
                    /*this.registracijaServis.registracijaOrganizator(this.korImeO,this.lozO,this.nazivO,this.matBrO,this.drzavaO,
                      this.gradO,this.posBrO,this.ulicaO,this.brojO,this.telO,this.emailO,2).subscribe((resp)=>{
                        this.porukaOrganizatorUspesno = resp["poruka"]
                      })*/
                  }
                })
              } 
            }
          }
        })
      }
  }
}
