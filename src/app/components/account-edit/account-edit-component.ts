import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shared/account/account';

@Component({
  selector: 'app-account-edit-component',
  templateUrl: './account-edit-component.html',
  styleUrls: ['./account-edit-component.css']
})
export class AccountEditComponent implements OnInit {

  account: Account

  constructor() { }

  ngOnInit() {
  }

  /**
   * setAccount
   */
  public setAccount(account: Account) {
    this.account=account;
  }

}
