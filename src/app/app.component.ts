import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Deventure Select';

//   onActivate(event) {
//     let scrollToTop = window.setInterval(() => {
//         let pos = window.pageYOffset;
//         if (pos > 0) {
//             window.scrollTo(0, pos - 20); // how far to scroll on each step
//         } else {
//             window.clearInterval(scrollToTop);
//         }
//     }, 8);
// }

onActivate(event) {
  window.scroll(0,0);
  
}
}
