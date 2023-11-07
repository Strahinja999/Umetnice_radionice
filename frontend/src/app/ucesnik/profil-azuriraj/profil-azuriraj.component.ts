import { Component, OnInit } from '@angular/core';
import { Ucesnik } from 'src/app/model/ucensik.model';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-profil-azuriraj',
  templateUrl: './profil-azuriraj.component.html',
  styleUrls: ['./profil-azuriraj.component.css']
})
export class ProfilAzurirajComponent implements OnInit{

  constructor(private ucesnikServis: UcesnikService) {}


  ngOnInit(): void {
    this.korisnickoIme = localStorage.getItem('korisnik');
    this.ucesnikServis.dohvatiUcesnika(this.korisnickoIme).subscribe((u :Ucesnik) =>{
      if(u){
        this.ucesnik = u
      }
    })
  }

  korisnickoIme: string;
  ucesnik: Ucesnik;

  izmeniKorImeBool: boolean = false
  izmeniImePrezimeBool: boolean = false
  izmeniTelefonBool: boolean = false
  izmeniEmailBool: boolean = false

  korImeNovo: string
  imeNovo:string
  prezimeNovo: string
  telefonNov:string
  emailNov:string

  porukaUspesno:string

  cardImageBase64:string =''

  izmeniKorIme(){
    if(this.izmeniKorImeBool) this.izmeniKorImeBool = false
    else this.izmeniKorImeBool = true;
  }

  izmeniImePrezime(){
    if(this.izmeniImePrezimeBool) this.izmeniImePrezimeBool = false
    else this.izmeniImePrezimeBool = true;
  }
  izmeniTelefon(){
    if(this.izmeniTelefonBool) this.izmeniTelefonBool = false
    else this.izmeniTelefonBool = true;
  }
  izmeniEmail(){
    if(this.izmeniEmailBool) this.izmeniEmailBool = false
    else this.izmeniEmailBool = true;
  }

  izmeni(){
    if(this.korImeNovo == "" || typeof this.korImeNovo == 'undefined') this.korImeNovo = this.ucesnik.korisnickoIme
    if(this.imeNovo == "" || typeof this.imeNovo == 'undefined') this.imeNovo = this.ucesnik.ime
    if(this.prezimeNovo == "" || typeof this.prezimeNovo == 'undefined') this.prezimeNovo = this.ucesnik.prezime
    if(this.telefonNov == "" || typeof this.telefonNov == 'undefined') this.telefonNov = this.ucesnik.telefon
    if(this.emailNov == "" || typeof this.emailNov == 'undefined') this.emailNov = this.ucesnik.email

    this.ucesnikServis.izmeniUcesnika(this.korisnickoIme, this.korImeNovo,this.imeNovo,this.prezimeNovo,this.telefonNov,this.emailNov, this.cardImageBase64).subscribe(res => {
      alert("OK")
      window.location.reload()
    })
    
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
