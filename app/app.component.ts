import { Component } from '@angular/core';
import { Ng2FloatBtnComponent, Ng2FloatBtn } from '../src';

@Component({
	selector: 'test-app',
	template: `
		<div style="display:block; margin: 20px; height: 92px;">
			<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'right'">
			</ng2-float-btn>
		</div>

		<div style="display:block; margin: 20px;">
			<div style="position:absolute; right:0;">
				<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'left'" [isMini]="true">
				</ng2-float-btn>
			</div>
		</div>
		
		<div style="display:block; margin: 20px;">
			<ng2-float-btn [mainButton]="mainButton" [buttons]="buttons" [direction]="'down'" >
			</ng2-float-btn>
		</div>

		<div style="z-index:400; position: absolute; bottom: 0;">
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
				color: "accent",
				iconName: "add",
				onClick: () => {
					alert("buton 1 clicked");
				},
				label : "button 1"
			},
			{
				color: "warn",
				iconName: "remove",
				onClick: () => {
					alert("buton 2 clicked");
				},
				label : "button 2"
			},
			{
				color: "primary",
				iconName: "folder",
				onClick: () => {
					alert("buton 3 clicked");
				},
				label : "button 3"
			}
		]
	}

}
