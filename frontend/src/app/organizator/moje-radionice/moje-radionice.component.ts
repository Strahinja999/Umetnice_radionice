import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from 'src/app/model/radionica.model';
import { OrganizatorService } from 'src/app/service/organizator.service';

@Component({
  selector: 'app-moje-radionice',
  templateUrl: './moje-radionice.component.html',
  styleUrls: ['./moje-radionice.component.css']
})
export class MojeRadioniceComponent  implements OnInit{

  ngOnInit(): void {
    this.organizatorServis.dohvatiMojeRadionice(localStorage.getItem('korisnik')).subscribe((data:Radionica[])=>{
      if(data){
        this.mojeRadionice = data
      }else alert("NE RADI")
    })
  }

  constructor(private organizatorServis: OrganizatorService, private ruter:Router) {}

  mojeRadionice:Radionica [] = new Array()

  detaljiBool:boolean = false

  viseDetalja(id){
    localStorage.setItem('idRadionice',id)
    //this.ruter.navigate(['/detaljiMojeRadionice'])
    if(this.detaljiBool) this.detaljiBool = false
    else this.detaljiBool = true
  }

}
