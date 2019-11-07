import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {
  film:any;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    const url= this.route.snapshot.paramMap.get('url');
    this.getFilmById(url).subscribe(data => {
      this.film=data;
    })
  }

  getFilmById (url:string) {
    return this.http.get(url);
  }
}
