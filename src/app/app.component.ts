import { Component, ElementRef,ViewChild,OnInit,AfterViewInit} from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'LuiscarPortfolio01'

  constructor(){
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
 canBeSeen(seen: any){
  console.log(seen)
  if(seen.isIntersecting){
    seen.target.classList.remove("notVisible")
  }
 }
}
