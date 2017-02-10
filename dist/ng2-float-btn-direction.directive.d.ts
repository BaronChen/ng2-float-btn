import { ElementRef, OnInit } from '@angular/core';
export declare class Ng2FloatBtnDirectionDirective implements OnInit {
    private el;
    btnDirection: string;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private setJustifyContent(position);
    private setDirection(flexDirection);
}
