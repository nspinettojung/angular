import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 topnav:boolean = false;

@HostListener('window:scroll',['$event']) onscroll(){
  if(window.scrollY > 80){
    this.topnav = true;
  }
  else{
    this.topnav = false;
  }
}

myLinks: boolean = true

myFunction(){
this.myLinks = !this.myLinks
}
 





}
