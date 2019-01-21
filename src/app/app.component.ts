import { Component, OnInit } from '@angular/core';
import {NgRedux,select} from '@angular-redux/store'
import {IAppState} from './store'
import { START } from './actions'
import * as _ from 'lodash';

interface Iuser{
  id:number;
name:string;
}

@Component({
  selector: 'ecn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  @select() title;
userdetails;
users:Iuser[]=[
  {"id":1,"name":"rajesh" },
  {"id":2,"name":"rishab" }
];

  constructor(public ngRedux:NgRedux<IAppState>){
  }
ngOnInit(){
  this.ngRedux.dispatch({type:START,payload:"Reduxworks"});
  this.userdetails=this.findusers(2);
}

findusers(id){
  let data;
data=_.find(this.users,(temp)=> {  if( id==temp.id) return temp } ); 
return data;
}
}
