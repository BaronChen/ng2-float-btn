import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[ng2-float-btn-li]'
})
export class Ng2FloatBtnLiDirective implements OnInit {

    constructor(private el: ElementRef) {
    }
    
    ngOnInit(){
        this.el.nativeElement.style.display = 'flex';
        this.setJustifyContent("start");
        this.setDirection("column");        
    }

    private setJustifyContent(position:string){
        this.el.nativeElement.style.justifyContent = position;
    }

    private setDirection(flexDirection: string) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    }

}
