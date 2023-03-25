import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allUsers :any =[]
  constructor(private service :DataService,private rout :Router){

  }
  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res =>{
      this.allUsers =res
      console.log(this.allUsers)
    })
  }

  gotoViewProfile(link:any){
    console.log(link)
    // this.rout.navigate('/viewprofile',qu)
    this.rout.navigateByUrl('/viewprofile/'+link)
  }

}
