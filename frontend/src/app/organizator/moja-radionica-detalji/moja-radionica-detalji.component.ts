import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Radionica } from 'src/app/model/radionica.model';
import { OrganizatorService } from 'src/app/service/organizator.service';

@Component({
  selector: 'app-moja-radionica-detalji',
  templateUrl: './moja-radionica-detalji.component.html',
  styleUrls: ['./moja-radionica-detalji.component.css']
})
export class MojaRadionicaDetaljiComponent implements OnInit{

  ngOnInit(): void {
    
    this.organizatorServis.dohvatiRadionicuPoID(localStorage.getItem('idRadionice')).subscribe((data:Radionica) =>{
      if(data){
        this.radionica = data
        this.generateUrl();
        for(var k of data.listaCekanja){
          if(k != ""){
            this.korisniciKojiCekaju.push(k)
          }
        }
      }
    })
  }

  downloadUrl;
  filename = "";

  generateUrl(){
    var res = {
      id: this.radionica.id, 
      naziv: this.radionica.naziv,
      datum: this.radionica.datum,
      mestoOdrzavanja:this.radionica.mestoOdrzavanja,
      kratakOpis: this.radionica.kratakOpis,
      dugacakOpis: this.radionica.dugacakOpis,
      ukupnoMesta: this.radionica.ukupnoMesta,
      rezervisanaMesta: this.radionica.rezervisanaMesta,
      listaCekanja: this.radionica.listaCekanja,
      listaPrijavljenih: this.radionica.listaPrijavljenih,
      listaOdobrenih:this.radionica.listaOdobrenih,
      organizator:this.radionica.organizator,
      lajkovi: this.radionica.lajkovi,
      status:this.radionica.status
    };
    this.filename = res.naziv;
    /*var res = { appname: "ABCD", appid: 1234 };
    this.filename = res.appname + res.appid;*/
    var data = JSON.stringify(res);
    var url = this.sanitizer.bypassSecurityTrustUrl(
      "data:text/json;charset=UTF-8," + encodeURIComponent(data)
    );
    this.downloadUrl = url;
  }


  constructor(private organizatorServis:OrganizatorService, private sanitizer: DomSanitizer){}

  cardImageBase64:string=''

  korisniciKojiCekaju: Array<string> = new Array()

  radionica: Radionica

  izmeniNazivBool: boolean = false
  izmeniDatumBool: boolean = false
  izmeniMestoBool: boolean = false
  izmeniKratakOpisBool: boolean = false
  izmeniDugacakOpisBool: boolean = false
  izmeniUkupanBrojMestaBool: boolean = false

  nazivNov: string
  datumNov: Date
  mestoNovo: string
  kratakOpisNov: string
  dugacakOpisNov: string
  brojMestaNov: number


  porukaUspesno:string

  izmeniNaziv(){
    if(this.izmeniNazivBool) this.izmeniNazivBool = false
    else this.izmeniNazivBool = true;
  }

  izmeniMesto(){
    if(this.izmeniMestoBool) this.izmeniMestoBool = false
    else this.izmeniMestoBool = true;
  }

  izmeniDatum(){
    if(this.izmeniDatumBool) this.izmeniDatumBool = false
    else this.izmeniDatumBool = true;
  }

  izmeniKratakOpis(){
    if(this.izmeniKratakOpisBool) this.izmeniKratakOpisBool = false
    else this.izmeniKratakOpisBool = true;
  }

  izmeniDugacakOpis(){
    if(this.izmeniDugacakOpisBool) this.izmeniDugacakOpisBool = false
    else this.izmeniDugacakOpisBool = true;
  }

  izmeniBrojMesta(){
    if(this.izmeniUkupanBrojMestaBool) this.izmeniUkupanBrojMestaBool = false
    else this.izmeniUkupanBrojMestaBool = true;
  }

  izmeni(){
    if(this.nazivNov == "" || typeof this.nazivNov == 'undefined') this.nazivNov = this.radionica.naziv
    if(this.mestoNovo == "" || typeof this.mestoNovo == 'undefined') this.mestoNovo = this.radionica.mestoOdrzavanja
    if(this.kratakOpisNov == "" || typeof this.kratakOpisNov == 'undefined') this.kratakOpisNov = this.radionica.kratakOpis
    if(this.dugacakOpisNov == "" || typeof this.dugacakOpisNov == 'undefined') this.dugacakOpisNov = this.radionica.dugacakOpis
    if(this.brojMestaNov == 0 || typeof this.brojMestaNov == 'undefined') this.brojMestaNov = this.radionica.ukupnoMesta
    if(this.datumNov == null) this.datumNov = this.radionica.datum

    this.organizatorServis.izmeniRadionicu(this.radionica.id, this.nazivNov,
      this.mestoNovo, this.datumNov, this.kratakOpisNov, this.dugacakOpisNov,
      this.brojMestaNov, this.cardImageBase64).subscribe(res =>{
        this.porukaUspesno= "Uspesno ste izmenili radionicu"
      })
  }

  odobri(korisnickoIme){
    var strId = this.radionica.id.toString()
    this.organizatorServis.odobriKorisnika(this.radionica.id,korisnickoIme,strId).subscribe(res =>{
      this.organizatorServis.odbiKorisnika(this.radionica.id, korisnickoIme).subscribe(res =>{
        alert("ok")
      })
    })
  }

  odbi(korisnickoIme){
    this.organizatorServis.odbiKorisnika(this.radionica.id, korisnickoIme).subscribe(res =>{
      alert("ok")
    })
  }

  otkazi(){
    this.organizatorServis.otkazi(this.radionica.id).subscribe(res =>{
      alert("ok")
      
    })
  }
  sacuvaj(){

  }

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }


}
