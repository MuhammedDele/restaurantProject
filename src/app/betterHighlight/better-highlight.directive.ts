import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";
@Directive({
  selector:'[appBasicHighlight]'

})
export class basicHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef,private render:Renderer2) {

}
ngOnInit() {
  // this.render.setStyle(this.elRef.nativeElement,'background-color','blue')
}
@HostListener('mouseenter') mouseover(eventData:Event){
  this.render.setStyle(this.elRef.nativeElement,'background-color','blue');

}
@HostListener('mouseleave') mouseleave(eventData:Event){
  this.render.setStyle(this.elRef.nativeElement,'background-color','transparent');

}
}
