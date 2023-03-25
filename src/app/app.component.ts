import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Interview';
  allUsers :any =[]

  constructor(private service :DataService,private rout :Router){

  }
  ngOnInit(): void {
    
  }

 
}
