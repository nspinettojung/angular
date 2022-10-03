import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Info:boolean = true
  visible:boolean = false

  showinfo1(){
    this.Info = !this.Info
    this.visible = !this.visible
  }

  Info2:boolean = true
  visible2:boolean = false

  showinfo2(){
    this.Info2 = !this.Info2
    this.visible2 = !this.visible2
  }

  Info3:boolean = true
  visible3:boolean = false

  showinfo3(){
    this.Info3 = !this.Info3
    this.visible3 = !this.visible3
  }

}

