import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AdminComponent } from './admin/admin.component';
import { UcesnikComponent } from './ucesnik/ucesnik.component';
import { NeregistrovanComponent } from './neregistrovan/neregistrovan.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { ZaboravljenaLozinkaComponent } from './zaboravljena-lozinka/zaboravljena-lozinka.component';
import { AdminPrijavaComponent } from './admin-prijava/admin-prijava.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OdobravanjeRegComponent } from './admin/odobravanje-reg/odobravanje-reg.component';
import { KorisniciComponent } from './admin/korisnici/korisnici.component';
import { PrivilegijeComponent } from './admin/privilegije/privilegije.component';
import { NoveRadioniceComponent } from './admin/nove-radionice/nove-radionice.component';
import { ProfilPregledComponent } from './ucesnik/profil-pregled/profil-pregled.component';
import { ProfilAzurirajComponent } from './ucesnik/profil-azuriraj/profil-azuriraj.component';
import { PostaniOrganizatorComponent } from './ucesnik/postani-organizator/postani-organizator.component';
import { RadioniceComponent } from './ucesnik/radionice/radionice.component';
import { DetaljiRadioniceComponent } from './ucesnik/detalji-radionice/detalji-radionice.component';
import { RadioniceOrganizatorComponent } from './organizator/radionice-organizator/radionice-organizator.component';
import { MojeRadioniceComponent } from './organizator/moje-radionice/moje-radionice.component';
import { MojaRadionicaDetaljiComponent } from './organizator/moja-radionica-detalji/moja-radionica-detalji.component';
import { DodajRadionicuComponent } from './organizator/dodaj-radionicu/dodaj-radionicu.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SlikaComponent } from './slika/slika.component';
import { PromeniLozinkuOComponent } from './organizator/promeni-lozinku-o/promeni-lozinku-o.component';
import { PromeniLozinkuUComponent } from './ucesnik/promeni-lozinku-u/promeni-lozinku-u.component';
import { RadioniceAdminComponent } from './admin/radionice-admin/radionice-admin.component';
import { PorukeComponent } from './organizator/poruke/poruke.component';



@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    RegistracijaComponent,
    AdminComponent,
    UcesnikComponent,
    NeregistrovanComponent,
    OrganizatorComponent,
    ZaboravljenaLozinkaComponent,
    AdminPrijavaComponent,
    OdobravanjeRegComponent,
    KorisniciComponent,
    PrivilegijeComponent,
    NoveRadioniceComponent,
    ProfilPregledComponent,
    ProfilAzurirajComponent,
    PostaniOrganizatorComponent,
    RadioniceComponent,
    DetaljiRadioniceComponent,
    RadioniceOrganizatorComponent,
    MojeRadioniceComponent,
    MojaRadionicaDetaljiComponent,
    DodajRadionicuComponent,
    SlikaComponent,
    PromeniLozinkuOComponent,
    PromeniLozinkuUComponent,
    RadioniceAdminComponent,
    PorukeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
