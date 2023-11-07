import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../model/korisnik.model';
import { RegistracijaService } from '../service/registracija.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent  implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(private registracijaServis: RegistracijaService,private ruter: Router){}

  cardImageBase64: string = '';


  tip:number

  korisnickoImeU:string;
  lozinkaU:string;
  lozinkaPotvrdaU:string;
  imeU:string;
  prezimeU:string;
  telefonU:string;
  emailU:string;

  korisnickoImeO:string;
  lozinkaO:string;
  lozinkaPotvrdaO:string;
  nazivO:string;
  maticniBrojO:string;
  drzavaO:string;
  gradO:string;
  ulicaO:string;
  brojO:string;
  telefonO:string;
  emailO:string
  postanskiBrojO:string

  isVisible:any
  isSelected: boolean = true

  poruka:string =""
  lozinkaPoruka: string 

  korisnikPostojiU: boolean = true
  emailPostojiU: boolean = true

  korisnikPostojiO: boolean = true
  emailPostojiO: boolean = true

  regex = /([A-Z])+(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?\- "]).*$/;

  ucesnikTipBool:boolean = false
  organizatroTipBool: boolean = false

  registracija(){
    switch(this.isVisible){
      case 1:{
        
        if(typeof this.korisnickoImeU == 'undefined' || typeof this.lozinkaU == 'undefined' || typeof this.lozinkaPotvrdaU == 'undefined' || 
        typeof this.imeU == 'undefined' || typeof this.prezimeU == 'undefined' || 
        typeof this.telefonU == 'undefined' || typeof this.emailU == 'undefined'){
          this.poruka = "Svi podaci moraju biti popunjeni!"
         
        }else{
          
        this.tip = 1;
        this.registracijaServis.pronadjiKorisnika(this.korisnickoImeU).subscribe((k)=>{
          if(k){
            this.poruka = "Korisnicko ime vec postoji!"
            this.korisnikPostojiU = true
          }else{
            if(!this.regex.test(this.lozinkaU)){
              this.poruka = "Loznika nije u dobrom formatu!"
              this.lozinkaPoruka = "Lozinka mora počinjati velikim slovom i sadržati bar jedan broj ili specijalni karakter iz skupa [!#$%&?-]"
            }else{
              this.lozinkaPoruka=""
              this.korisnikPostojiU = false
              if(this.lozinkaU != this.lozinkaPotvrdaU){
                this.poruka = "Loznka i potvrda lozinke se ne podudaraju!"
                this.korisnikPostojiU = true
              }else{
                this.korisnikPostojiU = false
                if(!this.korisnikPostojiU){
                  this.registracijaServis.pronadjiUcesnikaEmail(this.emailU).subscribe((korisnik : Korisnik)=>{
                    if(korisnik){
                      this.poruka = "Email vec postoji!"
                      this.emailPostojiU = true
                    }else{
                      this.emailPostojiU = false
                    }
                  })
                  if(!this.emailPostojiU){
                    this.registracijaServis.registracijaUcesnik(this.korisnickoImeU,this.lozinkaU,this.imeU,this.prezimeU,
                      this.telefonU,this.emailU,this.tip, this.cardImageBase64).subscribe((odgovor)=>{
                  
                      this.poruka = odgovor['poruka']
                    });
                  }
                  
                }
              }
            }
          }
        })
        
      }
        break;
      }
      case 2:{

        if(typeof this.korisnickoImeO == 'undefined' || 
        typeof this.lozinkaO == 'undefined' || 
        typeof this.nazivO == 'undefined' ||
        typeof this.maticniBrojO == 'undefined' || 
        typeof this.drzavaO == 'undefined' || 
        typeof this.gradO == 'undefined' ||
        typeof this.postanskiBrojO == 'undefined' || 
        typeof this.ulicaO == 'undefined' || 
        typeof this.brojO == 'undefined' ||
        typeof this.telefonO == 'undefined' || 
        typeof this.emailO == 'undefined'
        ){
          this.poruka = "Svi podaci moraju biti popunjeni!"
        }else{

          this.tip = 2;
          this.registracijaServis.pronadjiKorisnika(this.korisnickoImeO).subscribe((k)=>{
            if(k){
              this.poruka = "Korisnicko ime vec postoji!"
              this.korisnikPostojiO = true
            }else{
              if(!this.regex.test(this.lozinkaO)){
                this.poruka = "Loznika nije u dobrom formatu!"
                this.lozinkaPoruka = "Lozinka mora počinjati velikim slovom i sadržati bar jedan broj ili specijalni karakter iz skupa [!#$%&?-]"
              }else{
                this.lozinkaPoruka=""
                this.korisnikPostojiO = false
                if(this.lozinkaO != this.lozinkaPotvrdaO){
                  this.poruka = "Lozinka i potvrda lozinke se ne podudaraju!"
                  this.korisnikPostojiO = true
                }else{
                  this.korisnikPostojiO = false
                  if(!this.korisnikPostojiO){
                    this.registracijaServis.pronadjiOrganizatoraEmail(this.emailO).subscribe((odgovor)=>{
                      if(odgovor){
                        this.poruka = "Email vec postoji!"
                        this.emailPostojiO = true
                      }else{
                        this.emailPostojiO = false
                      }
                    })
                    if(!this.emailPostojiO){
                      this.registracijaServis.registracijaOrganizator(this.korisnickoImeO,this.lozinkaO,this.nazivO,this.maticniBrojO,this.drzavaO,
                        this.gradO,this.postanskiBrojO,this.ulicaO,this.brojO,this.telefonO,this.emailO,this.tip,this.cardImageBase64).subscribe((odgovor)=>{
                    
                        this.poruka = odgovor['poruka']
                      });
                    }
                    
                  }
        
                }
              }

              
            }
          })

          
        }
          

   
        break;
      }
    }
  }
  //DODAVANJE SLIKE
  
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

  azurirajTip(tip){
    if(tip == 'ucesnik'){
      this.ucesnikTipBool = true
    }else if(tip == 'organizator'){
      this.organizatroTipBool = true
    }
  }

}
