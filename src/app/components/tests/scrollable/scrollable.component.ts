import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.css']
})
export class ScrollableComponent {
  public canBeSeen = false
  niggaVisible(visible:any){
    if(visible){
      this.canBeSeen = true
    }
  }
}
