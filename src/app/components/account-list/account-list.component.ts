import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shared/account/account';
import { AccountService } from 'src/app/service/account/account-service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts:Account[];

  constructor(private userService: AccountService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(data=>{
      this.accounts = data.content;
    })
  }

  /**
   * input
   */
  public input(id:any) {
    console.log("clicou!"+id);
  }

}
