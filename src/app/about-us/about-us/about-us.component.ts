import { AfterContentChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements AfterContentChecked{
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  @ViewChild('carousel1') carousel1!: ElementRef<HTMLDivElement>;
  @ViewChild('carousel2') carousel2!: ElementRef<HTMLDivElement>;

  imageList1 = [
    "assets/images/Frame_20.png",
    "assets/images/Frame_24.png",
    "assets/images/Frame_21.png",
    "assets/images/Frame_25.png",
    "assets/images/Frame_22.png",
    "assets/images/Frame_26.png",
    "assets/images/Frame_23.png",
    "assets/images/Frame_27.png"
  ];
  imageList2 = [
    "assets/images/Frame_1.png",
    "assets/images/Frame_2.png",
    "assets/images/Frame_3.png",
    "assets/images/Frame_4.png",
    "assets/images/Frame_20.png",
    "assets/images/Frame_21.png",
    "assets/images/Frame_22.png",
  ];
  imageList3 = [
    "assets/images/Frame_5.png",
    "assets/images/Frame_6.png",
    "assets/images/Frame_7.png",
    "assets/images/Frame_8.png",
    "assets/images/Frame_23.png",
    "assets/images/Frame_24.png",
    "assets/images/Frame_25.png",
  ];

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
  
  ngAfterContentChecked(): void {
    const itemElements = Array.from(this.carousel.nativeElement.querySelectorAll('.item'));
    const total = itemElements.length;
    const itemElements1 = Array.from(this.carousel1.nativeElement.querySelectorAll('.item1'));
    const total1 = itemElements1.length;
    const itemElements2 = Array.from(this.carousel2.nativeElement.querySelectorAll('.item2'));
    const total2 = itemElements2.length;
    // gsap.registerPlugin();

    gsap.to(itemElements, {
      xPercent: -100 * total,
      duration: 3,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const num = parseFloat(x);
          return (num % (total / 2)) + "px"; // wrap seamlessly
        }
      }
    });

    gsap.to(itemElements1, {
      xPercent: -100 * total1,
      duration: 5,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const num = parseFloat(x);
          return (num % (total1 / 2)) + "px"; // wrap seamlessly
        }
      }
    });

    gsap.to(itemElements2, {
      xPercent: -100 * total2,
      duration: 4,  
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const num = parseFloat(x);
          return (num % (total2 / 2)) + "px"; // wrap seamlessly
        }
      }
    });
  }
}
