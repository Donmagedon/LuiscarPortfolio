import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public projects ="/projects"
  public AboutMe = "/about"
  public ContacMe = "/contact"
  public responsive =  false

  ngOnInit(): void {
    
  }
  hamburgerMenu(){

  }
}
