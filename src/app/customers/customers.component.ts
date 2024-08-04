import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [NgFor,NgIf,HttpClientModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers: any;
  public constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers")
    .subscribe({
      next: data=>{
        this.customers=data;
      },
    error: err=>{
      console.log(err);
    }
    })
  }

}
