/* tslint:disable:no-unused-variable */
import { Directive } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Ng2FloatBtnDirectionDirective } from './ng2-float-btn-direction.directive';
import { Ng2FloatBtnLiDirective } from './ng2-float-btn-li.directive';
import { Ng2FloatBtnLableDirective } from './ng2-float-btn-label.directive';
import { Ng2FloatBtnComponent } from './ng2-float-btn.component';
import { Ng2FloatBtn } from './models';

describe('Ng2FloatBtnComponent', () => {


	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Ng2FloatBtnComponent,
				Ng2FloatBtnDirectionDirective,
				Ng2FloatBtnLiDirective,
				Ng2FloatBtnLableDirective
			],
			imports: [
				BrowserModule,
				FormsModule,
				MaterialModule.forRoot()
			],
			providers: []
		});
		TestBed.compileComponents();
	});

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		expect(comp).toBeTruthy();
	}));

	let mainButton = {
		color: "primary",
		iconName: "check"
	}

	let buttons = [
		{
			color: "primary",
			iconName: "add",
			onClick: () => {
				alert("buton 1 clicked");
			},
			label: "button 1"
		},
		{
			color: "primary",
			iconName: "remove",
			onClick: () => {
				alert("buton 2 clicked");
			},
			label: "button 2"
		},
		{
			color: "primary",
			iconName: "folder",
			onClick: () => {
				alert("buton 3 clicked");
			},
			label: "button 3"
		}]

	it('should render buttons; Click main button should show buttons base on buttons array', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		fixture.detectChanges();

		spyOn(comp, "triggerBtnMenu").and.callThrough();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		//need to include hidden button
		expect(mainButtonEls.length).toBe(3);
		let mainButtonEl = mainButtonEls[2];
		expect(mainButtonEl.nativeElement.hasAttribute("md-fab")).toBe(true);
		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.triggerBtnMenu).toHaveBeenCalled();
		expect(comp.showBtns).toBe(true);

		let buttonsEls = fixture.debugElement.queryAll(By.css('button'));
		expect(buttonsEls.length).toBe(buttons.length + 3);
		let buttonEl = buttonsEls[buttonsEls.length-1];
		let iconEl = buttonEl.query(By.css('md-icon'));
		expect(iconEl.nativeElement.textContent).toBe(buttons[buttons.length - 1].iconName);

		spyOn(buttons[buttons.length - 1], "onClick");
		buttonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(buttons[buttons.length - 1].onClick).toHaveBeenCalled();
		expect(comp.triggerBtnMenu).toHaveBeenCalledTimes(2);
		expect(comp.showBtns).toBe(false);
	}));

	it('should be able to close btn menu', () => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		fixture.detectChanges();

		spyOn(comp, "triggerBtnMenu").and.callThrough();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		//need to include hidden button
		expect(mainButtonEls.length).toBe(3);
		let mainButtonEl = mainButtonEls[2];
		expect(mainButtonEl.nativeElement.hasAttribute("md-fab")).toBe(true);
		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.triggerBtnMenu).toHaveBeenCalled();
		expect(comp.showBtns).toBe(true);

		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.triggerBtnMenu).toHaveBeenCalledTimes(2);
		expect(comp.showBtns).toBe(false);
	})

	it('should render mini buttons', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		comp.direction = "right";
		comp.isMini = true;
		fixture.detectChanges();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		let mainButtonEl = mainButtonEls[2];
		expect(mainButtonEl.nativeElement.hasAttribute("md-mini-fab")).toBe(true);

		let buttonsEls = fixture.debugElement.queryAll(By.css('button'));
		let btnEl = buttonsEls[buttonsEls.length - 1];
		expect(btnEl.nativeElement.hasAttribute('md-mini-fab')).toBe(true);
	}));

	it('buttons should expend to right side', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		comp.direction = "right";
		fixture.detectChanges();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		let mainButtonEl = mainButtonEls[2];
		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('right-show');

		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('void');
	}));

	it('buttons should expend to left side', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		comp.direction = "left";
		fixture.detectChanges();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		let mainButtonEl = mainButtonEls[2];
		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('left-show');

		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('void');
	}));

	
	it('buttons should expend to below', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		comp.direction = "down";
		fixture.detectChanges();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		let mainButtonEl = mainButtonEls[2];
		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('down-show');

		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('void');
	}));

	
	it('buttons should expend to above', async(() => {
		const fixture = TestBed.createComponent(Ng2FloatBtnComponent);
		const comp = fixture.debugElement.componentInstance;

		comp.mainButton = mainButton;
		comp.buttons = buttons;
		comp.direction = "up";
		fixture.detectChanges();

		let mainButtonEls = fixture.debugElement.queryAll(By.css('button'));
		let mainButtonEl = mainButtonEls[2];
		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('up-show');

		mainButtonEl.triggerEventHandler('click', null);
		fixture.detectChanges();

		expect(comp.animateState).toBe('void');
	}));

});
