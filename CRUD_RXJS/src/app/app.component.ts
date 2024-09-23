import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CRUD_RXJS';
  screenHeight!: number;
  screenWidth!: number;
  footerMaxHeight!: number;
  constructor() {
    this.getScreenSize(event);
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    this.footerMaxHeight = this.screenHeight;
  }

  //to scroll top on routig new page
  active() {
    window.scroll(0, 0);
  }
}
