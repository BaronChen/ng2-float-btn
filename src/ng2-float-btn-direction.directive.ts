import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[ng2-float-btn-direction]'
})
export class Ng2FloatBtnDirectionDirective implements OnInit {

    @Input()
    btnDirection : string;

    constructor(private el: ElementRef) {
    }
    
    ngOnInit(){
        switch(this.btnDirection){
            case 'right':
                this.setJustifyContent('flex-start');
                this.setDirection('row');
                break;
            case 'left':
                this.setJustifyContent('flex-start');
                this.setDirection('row-reverse');
                break;
            case 'down':
                this.setJustifyContent('flex-start');
                this.setDirection('column');
                break;
            case 'up':
                this.setJustifyContent('flex-end');
                this.setDirection('column-reverse');
                break;
            default:
                throw 'invalid direction.'
        }
    }

    private setJustifyContent(position:string){
        this.el.nativeElement.style.justifyContent = position;
    }

    private setDirection(flexDirection: string) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    }

    private setPosition(position : string){
        this.el.nativeElement.style.position = position;
    }    

}
