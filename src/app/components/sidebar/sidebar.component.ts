import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private route: Router) {}

  @Input() openSidebar: boolean = false;

  @Output() closeSidebar = new EventEmitter<void>();

  closeSidebarBtn() {
    this.closeSidebar.emit();
  }

  about() {
    this.route.navigateByUrl('about');
  }

  logout() {
    this.route.navigateByUrl('');
  }
}
