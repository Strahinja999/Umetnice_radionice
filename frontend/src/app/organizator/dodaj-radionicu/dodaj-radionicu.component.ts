import { Component, OnInit } from '@angular/core';
import { Organizator } from 'src/app/model/organizator.model';
import { Radionica } from 'src/app/model/radionica.model';
import { OrganizatorService } from 'src/app/service/organizator.service';



@Component({
  selector: 'app-dodaj-radionicu',
  templateUrl: './dodaj-radionicu.component.html',
  styleUrls: ['./dodaj-radionicu.component.css']
})
export class DodajRadionicuComponent implements OnInit{

  ngOnInit(): void {
    this.organizator = JSON.parse(localStorage.getItem('ulogovan'))
    this.organizatorServis.dohvatiSveRadionice().subscribe((r:Radionica[])=>{
      if(r){
        this.radionice = r
        this.radionice.sort((r1, r2)=>{return r1.id-r2.id})
      }
    })  
  }

  constructor(private organizatorServis:OrganizatorService){}

  cardImageBase64:string=''
  nizSlika:Array<string> = []

  radionice:Radionica[]
  organizator:Organizator

  naziv:string
  datum:Date
  mesto:string
  kratakOpis:string
  dugacakOpis:string
  brMesta:number

  porukaGreska:string
  porukaUspesno:string

  dodaj(){
    if(this.naziv == '' || typeof this.naziv == 'undefined' ||
    typeof this.datum == 'undefined' ||
    this.kratakOpis == '' || typeof this.kratakOpis == 'undefined' ||
    this.dugacakOpis == '' || typeof this.dugacakOpis == 'undefined' ||
    this.mesto == '' || typeof this.mesto == 'undefined' ||
    typeof this.brMesta == 'undefined'
    ) this.porukaGreska = "Svi podaci moraju biti uneti!"
    else{
      this.porukaGreska = ""
      this.organizatorServis.dodajRadionicu(this.naziv,this.datum,this.mesto,this.kratakOpis,this.radionice[this.radionice.length -1].id+1,this.dugacakOpis,this.brMesta,this.organizator.korisnickoIme, this.nizSlika).subscribe((resp)=>{
        this.porukaUspesno = resp['message']
      })
    }
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
          //alert(this.cardImageBase64.length)
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  selectedFile:File
  radionica:any

  uploadJSON(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    
    fileReader.onload = (e:any) => {
      //alert(typeof fileReader.result)
      //alert(typeof e.target.result)
      this.radionica = JSON.parse(e.target.result)
      //localStorage.setItem('file',JSON.stringify(e.target.result))
      //this.radionica = JSON.parse(fileReader.result.toString)
      //alert(JSON.stringify(fileReader.result))
     //console.log(JSON.parse(fileReader.result));
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  dodajR()
  {
    this.organizatorServis.dodajRadionicu(this.radionica.naziv,this.radionica.datum,this.radionica.mestoOdrzavanja,this.radionica.kratakOpis,this.radionica.id+1,this.radionica.dugacakOpis,
      this.radionica.ukupnoMesta, this.radionica.organizator, this.radionica.slika).subscribe((resp)=>{
        this.porukaUspesno = resp['message']
      })
  }
}
