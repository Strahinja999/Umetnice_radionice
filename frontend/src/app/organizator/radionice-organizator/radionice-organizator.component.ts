import { Component, OnInit } from '@angular/core';
import { Radionica } from 'src/app/model/radionica.model';
import { AdminService } from 'src/app/service/admin.service';
import { OrganizatorService } from 'src/app/service/organizator.service';

@Component({
  selector: 'app-radionice-organizator',
  templateUrl: './radionice-organizator.component.html',
  styleUrls: ['./radionice-organizator.component.css']
})
export class RadioniceOrganizatorComponent implements OnInit{

  ngOnInit(): void {
    this.adminServis.dohvatiSveRadionice().subscribe((r:Radionica[])=>{
      if(r){
        for(let i = 0;i<r.length;i++){
          if(r[i].status == 1){
            this.radionice.push(r[i])
          }
        }
        this.radionice.sort((r1, r2)=>{return r1.id-r2.id})
      } 
    })
  }

  constructor(private organizatorServis:OrganizatorService, private adminServis:AdminService){}

  radionice:Radionica[] = new Array<Radionica>

}
