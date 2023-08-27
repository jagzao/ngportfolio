import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements AfterViewInit {
  @ViewChild('imageContainer', { static: true }) imageContainer!: ElementRef;

  images: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png', 
    'https://www.tec-innova.mx/wp-content/uploads/2021/12/Imagen1.png',
    'https://desarrolloweb.com/storage/tag_images/actual/BzOL16MEqsKOe0VThjF6FXPBi0uyK16lkTety9Wz.png'
  ];
  currentImageIndex = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.transitionImages();
  }

  transitionImages(): void {
    const imageElement = this.imageContainer.nativeElement;
    const duration = 5; // Duración de la transición en segundos
  
    gsap.to(imageElement, {
      opacity: 0,
      duration: duration,
      onComplete: () => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        const nextImage = this.images[this.currentImageIndex];
  
        this.preloadImage(nextImage).then(() => {
          setTimeout(() => {
            imageElement.src = nextImage;
            gsap.to(imageElement, {
              opacity: 1,
              duration: duration,
              onComplete: () => {
                // Forzar la actualización de la vista después de cargar la imagen
                this.changeDetectorRef.detectChanges();
                this.transitionImages();
              }
            });
          }, 200); // Esperar 200 ms antes de cargar la próxima imagen
        });
      }
    });
  }  

  preloadImage(imageUrl: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = (error) => reject(error);
      image.src = imageUrl;
    });
  }
}
