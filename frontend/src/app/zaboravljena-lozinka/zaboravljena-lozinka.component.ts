import { Component } from '@angular/core';

@Component({
  selector: 'app-zaboravljena-lozinka',
  templateUrl: './zaboravljena-lozinka.component.html',
  styleUrls: ['./zaboravljena-lozinka.component.css']
})
export class ZaboravljenaLozinkaComponent {

  email:string;

  resetujLozinku(){
    alert(this.email)
  }

}
