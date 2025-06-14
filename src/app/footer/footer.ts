import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
contact:{email:string,phone:string}={
  email:"mariam.rafat2001@gmail.com",
  phone:"01028479717",
}
}