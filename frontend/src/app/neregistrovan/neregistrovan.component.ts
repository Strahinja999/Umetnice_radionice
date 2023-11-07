import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { raceWith } from 'rxjs';
import { Korisnik } from '../model/korisnik.model';
import { Radionica } from '../model/radionica.model';
import { NeregistrovanService } from '../service/neregistrovan.service';
import { OrganizatorService } from '../service/organizator.service';
import { UcesnikService } from '../service/ucesnik.service';

@Component({
  selector: 'app-neregistrovan',
  templateUrl: './neregistrovan.component.html',
  styleUrls: ['./neregistrovan.component.css']
})
export class NeregistrovanComponent implements OnInit{

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'))
    this.neregistrovanServis.dohvatiSveRadionice().subscribe((data: Radionica[])=>{
      this.radionice = data;
      for(let i = 0;i<this.radionice.length;i++){
        if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
          this.aktuelneRadionice.push(this.radionice[i])
        }
         
      }
    })
  }

  constructor(private neregistrovanServis: NeregistrovanService,
     private ruter:Router,
     private organizatorServis:OrganizatorService,
     private ucesnikServis: UcesnikService){}

  korisnik:Korisnik

  trenuntiDatum:Date= new Date()

  radionice: Radionica[]
  aktuelneRadionice: Radionica[] = new Array()
  
  pretragaNaziv:string;
  pretragaGrad: string;
  pretragaKriterijum: string;

  porukaGreska:string;

  promeniLozinkuBool:boolean = false

  staraLozinka:string
  novaLozinka:string
  potvrdaLozinke:string
  poruka:string
  regex = /([A-Z])+(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?\- "]).*$/;

  pretrazi(){
    switch(this.pretragaKriterijum){
      case "1":{
        this.pretragaGrad = "";
        this.porukaGreska = ""
        if(this.pretragaNaziv == ""){
          this.neregistrovanServis.dohvatiSveRadionice().subscribe((data: Radionica[])=>{
            this.radionice = data;
            this.aktuelneRadionice = []
            for(let i = 0;i<this.radionice.length;i++){
              if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
                this.aktuelneRadionice.push(this.radionice[i])
              }
            }
          })
        }else{
          if(typeof this.pretragaNaziv == 'undefined') this.porukaGreska="Morate uneti naziv!"
          else{
            this.neregistrovanServis.dohvatiRadionicePoNazivu(this.pretragaNaziv).subscribe((data: Radionica[])=>{
              if(data.length == 0){
                this.aktuelneRadionice = []
                this.radionice = []
                this.porukaGreska= "Nema radionica po zadatom nazivu"
              }  
              else{
                this.radionice = data
                this.aktuelneRadionice = []
                for(let i = 0;i<this.radionice.length;i++){
                  if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
                    this.aktuelneRadionice.push(this.radionice[i])
                  }
                }
              }
            })
          }
        }
        break;
      }
      case "2":{
        this.pretragaNaziv = "";
        this.porukaGreska = ""
        if(this.pretragaGrad == ""){
          this.neregistrovanServis.dohvatiSveRadionice().subscribe((data: Radionica[])=>{
            this.radionice = data;
            this.aktuelneRadionice = []
            for(let i = 0;i<this.radionice.length;i++){
              if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
                this.aktuelneRadionice.push(this.radionice[i])
              }
               
            }
          })
        }else{
          if(typeof this.pretragaGrad == 'undefined') this.porukaGreska="Morate uneti grad!"
          else{
            this.neregistrovanServis.dohvatiRadionicePoGradu(this.pretragaGrad).subscribe((data: Radionica[])=>{
              if(data.length == 0) {
                this.porukaGreska= "Nema radionica po zadatom gradu"
                this.radionice = []
                this.aktuelneRadionice = []
              }
                else{
                this.radionice = data
                this.aktuelneRadionice = []
                for(let i = 0;i<this.radionice.length;i++){
                  if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
                    this.aktuelneRadionice.push(this.radionice[i])
                  }
                }
              }
            })
          }
        }
        break;
      }
      case "3":{
        this.porukaGreska=""
        if(this.pretragaGrad == "" && this.pretragaNaziv == ""){
          this.neregistrovanServis.dohvatiSveRadionice().subscribe((data: Radionica[])=>{
            this.radionice = data;
            this.aktuelneRadionice = []
            for(let i = 0;i<this.radionice.length;i++){
              if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
                this.aktuelneRadionice.push(this.radionice[i])
              }
            }
          })
        }else{
          if(typeof this.pretragaGrad == 'undefined' || typeof this.pretragaNaziv == 'undefined') this.porukaGreska="Morate uneti parametre"
          else{
            this.neregistrovanServis.dohvatiRadionicePoNazivuIGradu(this.pretragaNaziv, this.pretragaGrad).subscribe((data: Radionica[])=>{
              if(data.length == 0){
                this.porukaGreska= "Nema radionica po zadatom kriterijumu"
                this.radionice =[]
                this.aktuelneRadionice = []
              } 
              else{
                this.radionice = data
                this.aktuelneRadionice = []
                for(let i = 0;i<this.radionice.length;i++){
                  if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.radionice[i].datum,'yyyy-MM-dd','en_US')){
                    this.aktuelneRadionice.push(this.radionice[i])
                  }
                }
              }
            })
          }
        }
        break;
      }
      default: break;
    }
  }


  sortirajPoNazivu(){
    this.aktuelneRadionice = this.aktuelneRadionice.sort((a,b) =>{
      if(a.naziv>b.naziv) return 1;
      if(a.naziv<b.naziv) return -1;
      return 0
    })
  }

  sortirajPoDatumu(){
    this.aktuelneRadionice = this.aktuelneRadionice.sort((a,b) =>{
      if(a.datum > b.datum) return 1;
      if(a.datum < b.datum) return -1;
      return 0
    })
  }

  odjaviSe(){
    localStorage.removeItem('korisnik')
    this.ruter.navigate([''])
  }

  promeniLozinku(){
    this.promeniLozinkuBool = true
  }

  promeniLozinku1(){
    if(this.staraLozinka != this.korisnik.lozinka){
      this.poruka = "Pogresno uneta stara lozinka!"
    }else if(!this.regex.test(this.novaLozinka)){
      this.poruka = "Nova lozinka nije u dobrom formatu!"
    }else if(this.novaLozinka != this.potvrdaLozinke){
      this.poruka = "Lozinke se ne poklapaju!"
    }else{
      this.poruka= ""
      if(this.korisnik.tip == 1){
        this.ucesnikServis.promeniLozinku(this.korisnik.korisnickoIme, this.novaLozinka).subscribe((resp)=>{
          alert(resp["message"])
          localStorage.clear()
          this.ruter.navigate([''])
        })
      }else if(this.korisnik.tip == 2){
        this.organizatorServis.promeniLozinku(this.korisnik.korisnickoIme, this.novaLozinka).subscribe((resp)=>{
          alert(resp["message"])
          localStorage.clear()
          this.ruter.navigate([''])
        })
      }
    }
  }

}
