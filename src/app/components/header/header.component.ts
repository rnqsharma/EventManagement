import { AfterViewInit, Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit {
 

  constructor() { }
  ngAfterViewInit(): void {
    $(document).ready(function () {
  
      'use strict';
      
       var c, currentScrollTop = 0,
           navbar = $('nav');
    
       $(window).scroll(function () {
          var a = $(window).scrollTop();
          var b = navbar.height();
         
          currentScrollTop = a;
         
          if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
          } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
          }
          c = currentScrollTop;
      });
      
    });
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }

}
