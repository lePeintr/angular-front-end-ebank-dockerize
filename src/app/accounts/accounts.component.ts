import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [NgFor,NgIf,HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  accounts: any;
  public constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.http.get("http://localhost:8888/ACCOUNT-SERVICE/accounts")
    .subscribe({
      next: data=>{
        this.accounts=data;
      },
    error: err=>{
      console.log(err);
    }
    })
  }

}
