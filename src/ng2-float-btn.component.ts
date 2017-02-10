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

@Component({
	selector: 'ng2-float-btn',
	styles: [
		`ul {
			list-style-type: none; 
			margin: 0; 
			padding: 0; 
			overflow: hidden;
			display:flex;
		}`,
		`button {
			margin: 8px;
		}`
	],
	animations: [
		trigger(
			'rightAnimation',
			[
				transition(
					':enter', [
						style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					':leave', [
						style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }))
					]
				)
			]
		),
		trigger(
			'leftAnimation',
			[
				transition(
					':enter', [
						style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					':leave', [
						style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }))
					]
				)
			]
		),
		trigger(
			'downAnimation',
			[
				transition(
					':enter', [
						style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					':leave', [
						style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }))
					]
				)
			]
		),
		trigger(
			'upAnimation',
			[
				transition(
					':enter', [
						style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }),
						animate('400ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
					]
				),
				transition(
					':leave', [
						style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
						animate('400ms ease-in', style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }))
					]
				)
			]
		)
	],
	template: `
		<ul ng2-float-btn-direction [btnDirection]="direction">
			<li>
				<button md-fab (click)="triggerBtnMenu()">
					<md-icon>{{mainButton.iconName}}</md-icon>
				</button>	
			</li>
			<li *ngFor="let btn of buttons">
				<ng-container [ngSwitch]="direction">
					<ng-container *ngSwitchCase="'right'" >
						<button md-fab [@rightAnimation]="showBtns" *ngIf="showBtns"
								(click)="fireAction($event, btn.onClick)">
								<md-icon>{{btn.iconName}}</md-icon>
						</button>
					</ng-container>

					<ng-container *ngSwitchCase="'left'" >
						<button md-fab [@leftAnimation]="showBtns" *ngIf="showBtns"
								(click)="fireAction($event, btn.onClick)">
								<md-icon>{{btn.iconName}}</md-icon>
						</button>
					</ng-container>
					
					<ng-container *ngSwitchCase="'down'" >
						<button md-fab [@downAnimation]="showBtns" *ngIf="showBtns"
								(click)="fireAction($event, btn.onClick)">
								<md-icon>{{btn.iconName}}</md-icon>
						</button>
					</ng-container>

					<ng-container *ngSwitchCase="'up'" >
						<button md-fab [@upAnimation]="showBtns" *ngIf="showBtns"
								(click)="fireAction($event, btn.onClick)">
								<md-icon>{{btn.iconName}}</md-icon>
						</button>
					</ng-container>
				</ng-container>
			
				
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

	private showBtns: boolean = false;

	public constructor() {
	}

	ngOnInit() {
		if (!this.mainButton)
			throw "mainButton is required."

		if (!this.buttons || this.buttons.length == 0)
			throw "buttons is required.";

		if (!this.direction || this.direction == '')
			this.direction = "right";
	}

	public triggerBtnMenu() {
		this.showBtns = !this.showBtns;
	}

	public fireAction($event, action) {
		if (action)
			action($event);
	}

}
