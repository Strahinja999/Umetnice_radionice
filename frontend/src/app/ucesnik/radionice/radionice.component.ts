import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/app/model/radionica.model';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-radionice',
  templateUrl: './radionice.component.html',
  styleUrls: ['./radionice.component.css']
})
export class RadioniceComponent implements OnInit{

  ngOnInit(): void {
    this.viseDetaljaBool = false
    this.ucesnikServis.dohvatiUcesnika(localStorage.getItem('korisnik')).subscribe((data: Ucesnik)=>{
      if(data){
        this.ucesnik = data
        this.trenutnoPrijavljen = data.trenutnoPrijavljen
        //DODAVANJE RADIONICA NA KOJE JE UCESNIK TRENUTNO PRIJAVLJEN
        for (let i = 0;i < this.trenutnoPrijavljen.length;i++){
          this.ucesnikServis.dohvatiRadionicuPoID(parseInt(this.trenutnoPrijavljen[i])).subscribe((data: Radionica) =>{
            if(data){
              let l = this.radioniceTP.push(data)
            }
          })
        }
      }else{
        alert("NE RADI")
      }
    })
    this.ucesnikServis.dohvatiSveRadionice().subscribe((data: Radionica[])=>{
      this.sveRadionice = data;
      for(let i = 0;i<this.sveRadionice.length;i++){
        if(formatDate(this.trenuntiDatum,'yyyy-MM-dd','en_US') < formatDate(this.sveRadionice[i].datum,'yyyy-MM-dd','en_US') &&
        this.sveRadionice[i].status == 1){
          this.aktuelneRadionice.push(this.sveRadionice[i])
        }
         
      }
    })
  }

  constructor(private ucesnikServis: UcesnikService, private ruter:Router){}

  ucesnik:Ucesnik

  trenutnoPrijavljen: Array<string>
  radioniceTP: Radionica[] = new Array()

  sveRadionice:Radionica[]
  aktuelneRadionice:Radionica[] = new Array()


  trenuntiDatum:Date= new Date()

  viseDetaljaBool:boolean = false

  viseDetalja(id){
    localStorage.setItem("idRadionice", id)
    this.ruter.navigate(['/detaljiRadionice'])
    //this.viseDetaljaBool= true
  }

  sortirajPoNazivu(){
    this.radioniceTP = this.radioniceTP.sort((a,b) =>{
      if(a.naziv>b.naziv) return 1;
      if(a.naziv<b.naziv) return -1;
      return 0
    })
  }

  sortirajPoOpisu(){
    this.radioniceTP = this.radioniceTP.sort((a,b) =>{
      if(a.kratakOpis>b.kratakOpis) return 1;
      if(a.kratakOpis<b.kratakOpis) return -1;
      return 0
    })
  }

  sortirajPoMestu(){
    this.radioniceTP = this.radioniceTP.sort((a,b) =>{
      if(a.mestoOdrzavanja>b.mestoOdrzavanja) return 1;
      if(a.mestoOdrzavanja<b.mestoOdrzavanja) return -1;
      return 0
    })
  }

  sortirajPoDatumu(){
    this.radioniceTP = this.radioniceTP.sort((a,b) =>{
      if(a.datum > b.datum) return 1;
      if(a.datum < b.datum) return -1;
      return 0
    })
  }
  

}
