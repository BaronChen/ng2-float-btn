import { Ng2FloatBtn } from './models';
export declare class Ng2FloatBtnComponent {
    buttons: Array<Ng2FloatBtn>;
    mainButton: Ng2FloatBtn;
    direction: string;
    private showBtns;
    constructor();
    ngOnInit(): void;
    triggerBtnMenu(): void;
    fireAction($event: any, action: any): void;
}
