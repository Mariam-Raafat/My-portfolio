import { Component } from '@angular/core';
import {Header} from './header/header';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [Header,About,Skills,Projects,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
