import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Skill{
  name:string,
  value:number,
  color:string
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
focusItems : string[] = [
  'Angular & React Development',
  'TypeScript & SCSS Architecture',
  'Responsive Web Design with Bootstrap',
  'Reusable & Scalable Components'
];
 skillProgress:Skill[] = [
    { name: 'HTML5', value: 90, color: 'bg-danger' },
    { name: 'CSS3', value: 85, color: 'bg-info' },
    { name: 'Bootstrap', value: 90, color: 'bg-danger' },
    { name: 'JavaScript', value: 80, color: 'bg-info' },
    { name: 'TypeScript', value: 70, color: 'bg-warning' },
    { name: 'Angular', value: 70, color: 'bg-warning' },
  ];
}
