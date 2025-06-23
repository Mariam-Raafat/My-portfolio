import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
cards:{title:string,btn:string,color:string,link:string}[] = [
  {
    title:"Todo App",
    btn:"Please take a moment to review",
     color:"bg-light",
     link:"https://mariam-raafat.github.io/Todo-App/"
  },
  {
    title:"Landing-page",
    btn:"Please take a moment to review",
     color:"bg-info",
     link:"https://mariam-raafat.github.io/Landing-Page/"
  },
  {
    title:"Task Manager JQuery",
    btn:"Please take a moment to review",
    color:"bg-info",
    link:"https://mariam-raafat.github.io/Task-manager-jquery-/"
  },
  {
    title:"Responsive website",
    btn:"Please take a moment to review",
     color:"bg-light",
    link:"https://mariam-raafat.github.io/Responsive-website/"
  }
]
}
