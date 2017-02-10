import { Component } from '@angular/core';
import { Ng2FloatBtnComponent, Ng2FloatBtn } from '../src';

@Component({
	selector: 'test-app',
	template: `
		<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'right'">
		</ng2-float-btn>

		<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'left'">
		</ng2-float-btn>

		<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'down'">
		</ng2-float-btn>

		<div style="z-index:200; position: absolute; bottom: 0;">
			<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'up'">
			</ng2-float-btn>
		</div>
	`
})
export class AppComponent {

	mainButton: Ng2FloatBtn;

	buttons: Array<Ng2FloatBtn>;

	public constructor() {

		this.mainButton = {
			color: "primary",
			iconName: "check"
		}

		this.buttons = [
			{
				color: "primary",
				iconName: "add",
				onClick: () => {
					alert("buton 1 clicked");
				}
			},
			{
				color: "primary",
				iconName: "remove",
				onClick: () => {
					alert("buton 2 clicked");
				}
			},
			{
				color: "primary",
				iconName: "folder",
				onClick: () => {
					alert("buton 3 clicked");
				}
			}
		]
	}

}
