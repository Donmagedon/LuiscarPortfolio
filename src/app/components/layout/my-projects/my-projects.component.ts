import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls:['../../layout/commonStyle.component.css']
})
export class MyProjectsComponent {
  public projects  =[
    {
      title:"Blank Shore",
      url:"https://blank-shore.web.app/",
      projectInfo:`Ecommerce FullStack application that allows users to login to account to purchase items that better fit their lifeslyle and budget,
            the quality at Blank Shore is unmatched, you can show who you are , embrace your sense of fasion. <br>Login with dummy account: <b><br>Username: Visitor <br>Password: curious101</b>`,

    technologies:[
      "HTML&CSS3",
      "Angular",
      "JavaScript",
      "TypeScript",
      "ExpressJS",
      "NodeJS",
      "Created REST API for backend operations",
      "JWT for authentication",
      "Rxjs for asynchronous programming",
      "Linux VM for API testing",
      "Render for hosting API",
      "Firebase to host site"
    ],
    image:"../../../assets/media/BlankShoreDisplay.png"
    },
    {
      title:"Read my Coffee",
      url:"https://donmagedon.github.io/firstReachApp/",
      projectInfo:`Small Project of a landing page that will allow you to select a answer a few questions in a form, those questions will be used to determine the user personality, taste and mood, which will be used to generate the coffee they probably need`,

    technologies:[
      "HTML&CSS3",
      "ReactJS",
      "JavaScript",
      "ExpressJS",
      "NodeJS",
      "Render for hosting API",
      "Github Pages for Hosting"
    ],
    image:"../../../assets/media/ReadMyCoffee.png"
    }];


}
