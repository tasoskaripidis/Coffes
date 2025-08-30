import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrance',
  imports: [],
  templateUrl: './entrance.component.html',
  styleUrl: './entrance.component.css',
})
export class EntranceComponent {
  constructor(private route: Router) {}

  enterBtn() {
    this.route.navigateByUrl('main');
  }
}
