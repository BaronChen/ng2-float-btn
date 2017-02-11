import {
	Component,
	Input,
	trigger,
	transition,
	style,
	animate,
	state,
	OnInit
} from '@angular/core';

import { Ng2FloatBtn } from './models';

type BtnAnimateState = ('void' | 'right-show' | 'left-show' | 'up-show' | 'down-show');

@Component({
	selector: 'ng2-float-btn',
	styles: [
		`ul {
			list-style-type: none; 
			margin: 0; 
			padding: 0; 
			overflow: hidden;
			display:inline-flex;
			z-index: 200;
		}`,
		`button {
			margin: 8px;
		}`
	],
	animations: [
		trigger(
			'buttonAnimation',
			[
				transition(
					'void => right-show', [
						style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					'right-show => void', [
						style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }))
					]
				),
				transition(
					'void => left-show', [
						style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					'left-show => void', [
						style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }))
					]
				),
				transition(
					'void => down-show', [
						style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					'down-show => void', [
						style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }))
					]
				),
				transition(
					'void => up-show', [
						style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					'up-show => void', [
						style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }))
					]
				)
			]
		),
		trigger(
			'labelAnimation',
			[
				transition(
					':enter', [
						style({ transform: 'scale(0.6)', 'opacity': 0 }),
						animate('100ms 300ms ease', style({ transform:'scale(1)', opacity: 1 }))
					]
				),
				transition(
					':leave', [
						style({ transform: 'scale(1)', 'opacity': 1 }),
						animate('200ms ease-out', style({ transform: 'scale(0.6)', opacity: 0 }))
					]
				)
			]
		)
	],
	//the two hidden button is used to trigger a render of material fab 
	//so that the buttons with attribute binding will render correctly later
	template: `
		<button md-fab style="display: none"></button>
		<button md-mini-fab style="display: none"></button>
		<ul ng2-float-btn-direction [btnDirection]="direction">
			<li>
				<button [attr.md-fab]="isMini ? null : ''" [attr.md-mini-fab]="isMini ? '' : null"
						(click)="triggerBtnMenu()">
					<md-icon>{{mainButton.iconName}}</md-icon>
				</button>	
			</li>
			<li *ngFor="let btn of buttons" ng2-float-btn-li>
				<button [attr.md-fab]="isMini ? null : ''" [attr.md-mini-fab]="isMini ? '' : null"
					[@buttonAnimation]="animateState" *ngIf="showBtns"
					(click)="fireAction($event, btn.onClick)">
						<md-icon>{{btn.iconName}}</md-icon>
				</button>
				<label *ngIf="shouldShowLabel(btn.label) && showBtns" [@labelAnimation]="showBtns"
						ng2-float-btn-label [isMini]="isMini">
					{{btn.label}}
				</label>
			</li>
			
		</ul>
		
  `
})
export class Ng2FloatBtnComponent {

	@Input()
	buttons: Array<Ng2FloatBtn>;

	@Input()
	mainButton: Ng2FloatBtn;

	@Input()
	direction: string;

	@Input()
	isMini: boolean;

	private showBtns: boolean = false;

	private animateState: BtnAnimateState = 'void';

	public constructor() {
	}

	ngOnInit() {
		if (!this.mainButton)
			throw "mainButton is required."

		if (!this.buttons || this.buttons.length == 0)
			throw "buttons is required.";

		if (!this.direction || this.direction == '')
			this.direction = "right";

		if (!this.isMini) {
			this.isMini = false;
		}
	}

	public triggerBtnMenu() {
		this.showBtns = !this.showBtns;

		if (!this.showBtns) {
			this.animateState = 'void';
		} else {
			switch (this.direction) {
				case 'right':
					this.animateState = 'right-show';
					break;
				case 'left':
					this.animateState = 'left-show';
					break;
				case 'down':
					this.animateState = 'down-show';
					break;
				case 'up':
					this.animateState = 'up-show';
					break;
				default:
					throw 'Invalid direction.';
			}
		}

	}

	public fireAction($event, action) {
		this.triggerBtnMenu();
		if (action)
			action($event);
	}

	public shouldShowLabel(title: string) {
		if (!title || title == '')
			return false;

		return true;
	}

}
