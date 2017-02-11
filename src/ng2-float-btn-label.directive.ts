import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[ng2-float-btn-label]'
})
export class Ng2FloatBtnLableDirective implements OnInit {

    @Input()
    isMini : boolean;

    constructor(private el: ElementRef) {
    }
    
    ngOnInit(){
        this.el.nativeElement.style.alignSelf = 'center';
        this.el.nativeElement.style.fontFamily = 'Roboto,"Helvetica Neue",sans-serif';
       
        if (this.isMini == true){
            this.el.nativeElement.style.fontSize = "0.7em";
        }else{
            this.el.nativeElement.style.fontSize = "0.9em";
        }

    }

   
}
