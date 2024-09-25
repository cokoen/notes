import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css'
})
export class CloudComponent implements OnInit{
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const catSub = this.http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').subscribe(sub => {
      console.log(sub)  
      this.data = sub //JSON.stringify(sub)
      catSub.unsubscribe()
    })
  }
}
