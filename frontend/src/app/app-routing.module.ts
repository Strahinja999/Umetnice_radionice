import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPrijavaComponent } from './admin-prijava/admin-prijava.component';
import {AdminComponent} from './admin/admin.component';
import { OdobravanjeRegComponent } from './admin/odobravanje-reg/odobravanje-reg.component';
import { RadioniceAdminComponent } from './admin/radionice-admin/radionice-admin.component';
import { NeregistrovanComponent } from './neregistrovan/neregistrovan.component';
import { MojaRadionicaDetaljiComponent } from './organizator/moja-radionica-detalji/moja-radionica-detalji.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { PorukeComponent } from './organizator/poruke/poruke.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { SlikaComponent } from './slika/slika.component';
import { DetaljiRadioniceComponent } from './ucesnik/detalji-radionice/detalji-radionice.component';
import { ProfilAzurirajComponent } from './ucesnik/profil-azuriraj/profil-azuriraj.component';
import { ProfilPregledComponent } from './ucesnik/profil-pregled/profil-pregled.component';
import { RadioniceComponent } from './ucesnik/radionice/radionice.component';
import { UcesnikComponent } from './ucesnik/ucesnik.component';
import { ZaboravljenaLozinkaComponent } from './zaboravljena-lozinka/zaboravljena-lozinka.component';

const routes: Routes = [
  {path: '', component: PrijavaComponent},
  {path: 'registracija', component:RegistracijaComponent},
  {path: 'zaboravljenaLozinka' , component: ZaboravljenaLozinkaComponent},
  {path: 'adminPrijava', component:AdminPrijavaComponent},
  {path: 'ucesnik', component: UcesnikComponent},
  {path: 'organizator', component: OrganizatorComponent },
  {path: 'admin', component:AdminComponent},
  {path: 'odobravanjeReg', component:OdobravanjeRegComponent},
  {path: 'neregistrovan', component:NeregistrovanComponent},
  {path: 'profil-pregled', component:ProfilPregledComponent},
  {path: 'profil-azuriraj', component:ProfilAzurirajComponent},
  {path: 'radionice', component:RadioniceComponent},
  {path: 'detaljiRadionice', component:DetaljiRadioniceComponent},
  {path: 'detaljiMojeRadionice', component:MojaRadionicaDetaljiComponent},
  {path: 'slika', component: SlikaComponent},
  {path: 'radioniceAdmin', component:RadioniceAdminComponent},
  {path: 'poruke', component:PorukeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
