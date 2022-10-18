import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanoEstilo]'
})
export class BooleanoEstiloDirective {
  @Input('appBooleanoEstilo') inscripcionAbierta!: boolean;

  constructor(
    private elemento: ElementRef,
    private rendered: Renderer2
  ) { }

  ngOnInit(): void {
    this.rendered.setStyle(this.elemento.nativeElement, 'padding', '5px 10px 5px 10px');
    this.rendered.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
    this.rendered.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
    this.rendered.setStyle(this.elemento.nativeElement, 'color', '#FFFFFF');
    this.rendered.setStyle(this.elemento.nativeElement, 'background-color', this.inscripcionAbierta ? '#4CAF50' : '#F44336');

  }

}
