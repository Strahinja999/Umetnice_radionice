import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlikaService {

  uri = 'http://localhost:4000/slika'

  constructor(private http: HttpClient) { }

  addImage(image: File){
    const imageData = new FormData()
    imageData.append("image", image)

    this.http.post(`${this.uri}/dodajSliku `, imageData)
    
  }
}
