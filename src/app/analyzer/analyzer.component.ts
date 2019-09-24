import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.css']
})
export class AnalyzerComponent implements OnInit {

flag1:boolean=false;
flag2:boolean=false;
filePath:string;

tabBoolean2:boolean=false;


  constructor() { }

  ngOnInit() {
  
  }

 click1(){
   console.log(this.flag1)
 }
 click2(){
  console.log(this.flag2)
}

handleUpload(e){
  this.filePath=e.target.value
  console.log(this.filePath)
}

submit(){
  this.tabBoolean2=true;
}




}
