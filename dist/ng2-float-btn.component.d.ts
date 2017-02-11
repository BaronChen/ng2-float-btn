import { Ng2FloatBtn } from './models';
export declare type BtnAnimateState = ('void' | 'right-show' | 'left-show' | 'up-show' | 'down-show');
export declare class Ng2FloatBtnComponent {
    buttons: Array<Ng2FloatBtn>;
    mainButton: Ng2FloatBtn;
    direction: string;
    isMini: boolean;
    showBtns: boolean;
    animateState: BtnAnimateState;
    constructor();
    ngOnInit(): void;
    triggerBtnMenu(): void;
    fireAction($event: any, action: any): void;
    shouldShowLabel(title: string): boolean;
}
