import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
productList:any;
  constructor(private http: HttpClient) {
    this.http.get('https://fakestoreapi.com/products').subscribe(data => this.productList = data);
   }

  ngOnInit(): void {
  }

  onBuyNow(item:any){

    console.log(item);
    alert("prchase done sucessfully");


  }

  Addtocart(item:any){


  }

}
