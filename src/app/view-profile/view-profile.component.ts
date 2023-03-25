import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private act :ActivatedRoute,private data:DataService) { }
  profileId:any
  profileData:any

  ngOnInit(): void {
    this.act.paramMap.subscribe((res:any)=>{
      
      this.profileId =res?.params.id
      this.data.getProfileData(this.profileId).subscribe((data:any) =>{
        this.profileData =data
        console.log(this.profileData)
      })
    })
  }

}
