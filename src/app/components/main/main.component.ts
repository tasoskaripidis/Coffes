import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { coffee, ServiceService } from '../../service/service.service';
import { NgFor } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  imports: [NgFor, SidebarComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  showHomeBtn: boolean = true;
  showCardBtn: boolean = false;
  coffeList: coffee[] = [];
  openBar: boolean = false;
  coffeById: number = 0;
  getOverlay: boolean = false;
  showMain: boolean = true;
  showCart: boolean = false;
  favCoffee: coffee[] = [];
  constructor(private route: Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getAPI().subscribe((value) => {
      this.coffeList = value;
    });

    this.service.openOverlay$.subscribe((value) => {
      if (value) {
        this.getOverlay = true;
        setTimeout(() => {
          this.getOverlay = false;
        }, 2000);
      }
    });

    this.service.addCoffe$.subscribe((value) => {
      this.favCoffee = value;
    });
  }

  homeBtn() {
    this.showHomeBtn = true;
    this.showCardBtn = false;
    this.showMain = true;
    this.showCart = false;
  }

  cardBtn() {
    this.showCardBtn = true;
    this.showHomeBtn = false;
    this.showCart = true;
    this.showMain = false;
  }

  openSidebarBtn() {
    this.openBar = true;
  }

  details(value: coffee) {
    this.service.setCoffe(value);
    this.route.navigateByUrl('details');
  }
}
