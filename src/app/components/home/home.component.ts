import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Front-End-Conductor-Challenger';
  load: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  loadAccounts(){
    this.load = true;
  }

}
