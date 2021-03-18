import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',

})
export class MainComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  closeMenu() {
    const body = document.getElementsByTagName('body')[0].classList.remove('offcanvas-active');
  }
}
