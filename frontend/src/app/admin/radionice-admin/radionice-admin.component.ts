import { Component, OnInit } from '@angular/core';
import { Radionica } from 'src/app/model/radionica.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-radionice-admin',
  templateUrl: './radionice-admin.component.html',
  styleUrls: ['./radionice-admin.component.css']
})
export class RadioniceAdminComponent implements OnInit{

  ngOnInit(): void {
    this.adminServis.dohvatiSveRadionice().subscribe((r:Radionica[])=>{
      if(r){
        this.radionice = r
        this.radionice.sort((r1, r2)=>{return r1.id-r2.id})
      } 
    })
  }

  constructor(private adminServis:AdminService){}

  radionice: Radionica[]

  radionicaAzuriraj:Radionica

  radinicaAzurirajBool: boolean = false
  radionicaDodajBool:boolean = false

  izmeniOrgBool:boolean = false
  izmeniNazivBool:boolean = false
  izmeniKOpisBool:boolean = false
  izmeniDOpisBool: boolean = false
  izmeniMestoBool: boolean = false
  izmeniDatBool:boolean = false
  izmeniBrMestaBool:boolean = false

  //PODACI ZA AZURIRANJE
  organizatorNov:string;
  nazivNov:string
  kratakOpisNov:string
  dugacakOpisNov:string
  mestoOdrzavanjaNovo:string
  datumNov:Date
  ukupnoMestaNovo:number

  //PODACI ZA DODAVANJE
  organizatorN:string 
  nazivN:string
  datumN:Date
  mestoN:string
  kratakOpisN:string
  dugacakOpisN:string
  brMestaN:number

  porukaDodaj:string
  porukaDodajUspesno:string


  azurirajR(radionica){
    this.radionicaAzuriraj = radionica
    if(this.radinicaAzurirajBool) this.radinicaAzurirajBool = false
    else this.radinicaAzurirajBool = true
  }

  toggle(data){
    switch(data){
      case "organizator":{
        if(this.izmeniOrgBool) this.izmeniOrgBool = false
        else this.izmeniOrgBool = true
        this.organizatorNov = ''
        break
      }
      case "naziv":{
        if(this.izmeniNazivBool) this.izmeniNazivBool = false
        else this.izmeniNazivBool = true
        this.nazivNov = ''
        break
      }
      case "kratakOpis":{
        if(this.izmeniKOpisBool) this.izmeniKOpisBool = false
        else this.izmeniKOpisBool = true
        this.kratakOpisNov = ''
        break
      }
      case "dugacakOpis":{
        if(this.izmeniDOpisBool) this.izmeniDOpisBool = false
        else this.izmeniDOpisBool = true
        this.dugacakOpisNov =''
        break
      }
      case "mestoOdrzavanja":{
        if(this.izmeniMestoBool) this.izmeniMestoBool = false
        else this.izmeniMestoBool = true
        this.mestoOdrzavanjaNovo =''
        break
      }
      case "datum":{
        if(this.izmeniDatBool) this.izmeniDatBool = false
        else this.izmeniDatBool = true
        this.datumNov = null
        break
      }
      case "ukupnoMesta":{
        if(this.izmeniBrMestaBool) this.izmeniBrMestaBool = false
        else this.izmeniBrMestaBool = true
        this.ukupnoMestaNovo = null
        break
      }
    }
  }

  azurirajRadionicu(){
    if(this.organizatorNov == '' || typeof this.organizatorNov == 'undefined') this.organizatorNov = this.radionicaAzuriraj.organizator
    if(this.nazivNov == '' || typeof this.nazivNov == 'undefined') this.nazivNov = this.radionicaAzuriraj.naziv
    if(this.kratakOpisNov == '' || typeof this.kratakOpisNov == 'undefined') this.kratakOpisNov = this.radionicaAzuriraj.kratakOpis
    if(this.dugacakOpisNov == '' || typeof this.dugacakOpisNov == 'undefined') this.dugacakOpisNov = this.radionicaAzuriraj.dugacakOpis
    if(this.mestoOdrzavanjaNovo == '' || typeof this.mestoOdrzavanjaNovo == 'undefined') this.mestoOdrzavanjaNovo = this.radionicaAzuriraj.mestoOdrzavanja
    if(typeof this.datumNov == 'undefined') this.datumNov = this.radionicaAzuriraj.datum
    if(typeof this.ukupnoMestaNovo == 'undefined') this.ukupnoMestaNovo = this.radionicaAzuriraj.ukupnoMesta

    //AZURIRAJ BACKEND

    this.adminServis.izmeniRadionicu(this.radionicaAzuriraj.id,this.organizatorNov,
      this.nazivNov, this.kratakOpisNov,this.dugacakOpisNov, this.mestoOdrzavanjaNovo,this.datumNov,this.ukupnoMestaNovo).subscribe(res =>{})

  }

  obrisiR(radionica){
    this.adminServis.obrisiRadionicu(radionica.id).subscribe((resp)=>{
      alert(resp["message"])
    })
  }

  dodajR(){
    if(this.radionicaDodajBool) this.radionicaDodajBool = false
    else this.radionicaDodajBool = true
  }

  dodajRadionicu(){
    if(this.organizatorN == '' || typeof this.organizatorN == 'undefined' ||
      this.nazivN == '' || typeof this.nazivN == 'undefined' ||
      typeof this.datumN == 'undefined' ||
      this.mestoN == '' || typeof this.mestoN == 'undefined' ||
      this.kratakOpisN == '' || typeof this.kratakOpisN == 'undefined' ||
      this.dugacakOpisN == '' || typeof this.dugacakOpisN == 'undefined' ||
      typeof this.brMestaN == 'undefined'
    ) this.porukaDodaj = "Svi podaci moraju biti uneti!"
    else{
      this.porukaDodaj=''
      this.adminServis.dodajRadionicu(this.nazivN,this.datumN,this.mestoN,this.kratakOpisN,this.radionice[this.radionice.length -1].id+1,this.dugacakOpisN,this.brMestaN,this.organizatorN).subscribe((resp)=>{
        this.porukaDodajUspesno = resp["message"]
      })
    }
  }

}
