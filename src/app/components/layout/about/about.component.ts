import { Component,OnInit, ViewChild,AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls:['../../layout/commonStyle.component.css']
})
export class AboutComponent  implements OnInit, AfterViewInit{
  @ViewChild("hiThere")test!:ElementRef<HTMLElement>;
  public ob = IntersectionObserver
  constructor(){}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  //   let hehe = new this.ob((entries)=>{
  //     console.log(entries)
  //   })
  //   hehe.observe(this.test)
  // }
  console.log(this.test)

}
}