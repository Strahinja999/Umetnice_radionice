import { Component } from '@angular/core';
import { Ucesnik } from '../model/ucensik.model';
import { UcesnikService } from '../service/ucesnik.service';

@Component({
  selector: 'app-slika',
  templateUrl: './slika.component.html',
  styleUrls: ['./slika.component.css']
})
export class SlikaComponent {

  image:string
  imageData:string

  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  constructor(private ucesnikServis: UcesnikService) {
    this.ucesnik = JSON.parse(localStorage.getItem('ulogovan'))
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
          this.ucesnikServis.dodajSliku(imgBase64Path,localStorage.getItem('korisnik')).subscribe((resp)=>{
            alert(resp["message"])
          })
          this.isImageSaved = true;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
      
    }
    alert(this.cardImageBase64)
  }
  ucesnik:Ucesnik

  /*submit(){
    alert(this.image)
    alert(this.imageData)
  }

  onFileSelect(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"]
    if(file && allowedMimeTypes.includes(file.type)){
      const reader = new FileReader()
      reader.onload = () => {
        this.imageData = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }*/

}
