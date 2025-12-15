import { Component } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss'
})
export class AppContentComponent {

  onMouseEnterButton(event: MouseEvent) {
    const button = event?.target as HTMLElement;
    gsap.to(button, { 
      background: "linear-gradient(92.18deg, #8C01FA -0.81%, #000000 187.84%)",
      borderImageSource: "linear-gradient(90deg, #8C01FA 0%, #440178 100%)",
      border: "1px solid",
      duration: 0.3,
      ease: "ease-in-out",
    });
  }

  onMouseLeaveButton(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    gsap.to(button, { 
      background: "linear-gradient(98.88deg, #8C01FA -2.99%, #000000 102.28%)",
      borderImageSource: "linear-gradient(90deg, #440178 0%, #8C01FA 100%)" ,
      border: "1px solid",
      duration: 0.3,
      ease: "ease-in-out",
    });
  }

}
