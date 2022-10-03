import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Info4:boolean = true
  visible4:boolean = false

  showinfo4(){
    this.Info4 = !this.Info4
    this.visible4 = !this.visible4
  }

  Info5:boolean = true
  visible5:boolean = false

  showinfo5(){
    this.Info5 = !this.Info5
    this.visible5 = !this.visible5
  }

  Info6:boolean = true
  visible6:boolean = false

  showinfo6(){
    this.Info6 = !this.Info6
    this.visible6 = !this.visible6
  }

}
