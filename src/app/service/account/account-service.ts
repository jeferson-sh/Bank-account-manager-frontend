import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/shared/account/account';
import { Page } from 'src/app/shared/pagination/page/page';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/api/accounts';
  }

  public findAll(): Observable<Page<Account>> {
    return this.http.get<Page<Account>>(this.accountsUrl);
  }
 
  public save(account: Account) {
    return this.http.post<Account>(this.accountsUrl, account);
  }
}
