import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  url='https://swapi.co/api/films/';
  infoFilm :any;
  listFilms: any;

  constructor(private http:HttpClient) { }

  ngOnInit() { 
    this.getAllFilm().subscribe (data => {
      this.infoFilm=data;
      this.listFilms=this.infoFilm.results;
    }) 
  }

  getAllFilm () {
    return this.http.get(this.url);
  }

  
}
