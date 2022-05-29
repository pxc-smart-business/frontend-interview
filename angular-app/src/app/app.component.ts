import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName:String="";
  userProfilePic:String="";
  userRepo:any;
  term:any;
  order: string = 'name';
  reverse: boolean = false;

  constructor(private http:HttpClient){
  }
  
  ngOnInit(){
    this.http.get(environment.gitRepoUrl).subscribe((data) => this.setUserRepoData(data));
  }
  
  setUserRepoData(data:any){
    this.userRepo = data;
    this.userName = data[0].owner.login;
    this.userProfilePic = data[0].owner.avatar_url;
    console.log("Name", this.userName);
    console.log("Pic", this.userProfilePic); 
    console.log("MyProfile", this.userRepo);
  }

  setOrder(order:any) {
    this.order = order;
    this.reverse = !this.reverse;
  }
}
