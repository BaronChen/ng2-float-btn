import { ElementRef, OnInit } from '@angular/core';
export declare class Ng2FloatBtnLiDirective implements OnInit {
    private el;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private setJustifyContent(position);
    private setDirection(flexDirection);
}
