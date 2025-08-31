import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { coffee, ServiceService } from '../../service/service.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  coffee?: coffee | null;
  overlay: boolean = true;

  constructor(private service: ServiceService, private route: Router) {}
  ngOnInit(): void {
    this.service.buyCoffe$.subscribe((value) => {
      this.coffee = value;
    });
  }

  addToCard(value: boolean) {
    if (this.coffee) {
      this.service.sendOverlay(value);
      this.service.addFavorite(this.coffee);
      this.route.navigateByUrl('main');
    }
  }
}
