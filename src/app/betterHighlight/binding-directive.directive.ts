import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";
@Directive({
  selector:'[app2BasicHighlight]'

})
export class basicHighlightDirective2 implements OnInit{
  @Input()defaultColor:string='transparent';
  @Input()highlightColor:string='red';
  @HostBinding('style.backgroundColor')backgroundColor :string;

  constructor(private elRef:ElementRef,private render:Renderer2) {

}
ngOnInit() {
  this.backgroundColor=this.defaultColor;
  // this.render.setStyle(this.elRef.nativeElement,'background-color','blue')
}
@HostListener('mouseenter') mouseover(eventData:Event){
  this.backgroundColor=this.highlightColor;

}
@HostListener('mouseleave') mouseleave(eventData:Event){
  this.backgroundColor=this.defaultColor;


}
}
