/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { TestBed, async,  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Ng2FloatBtnDirectionDirective } from './ng2-float-btn-direction.directive';

@Component({
  template: `
    <ul id="rightUl" ng2-float-btn-direction [btnDirection]="'right'">
        <li></li>
    </ul>
    <ul id="leftUl" ng2-float-btn-direction [btnDirection]="'left'">
        <li></li>
    </ul>
    <ul id="upUl" ng2-float-btn-direction [btnDirection]="'up'">
        <li></li>
    </ul>
    <ul id="downUl" ng2-float-btn-direction [btnDirection]="'down'">
        <li></li>
    </ul>
  `
})
class TestComponent {}

describe('Ng2FloatBtnDirectionDirective', () => {
    let fixture;
    
    beforeEach(async(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, Ng2FloatBtnDirectionDirective]
        })
        .createComponent(TestComponent);
        fixture.detectChanges(); 

    }));

    it('ul with right direction should be rendered with proper style', async(() => {
        let rightUlEl = fixture.debugElement.query(By.css("#rightUl"));
        let display = rightUlEl.nativeElement.style.display;
        let justifyContent = rightUlEl.nativeElement.style.justifyContent;
        let flexDirection = rightUlEl.nativeElement.style.flexDirection;

        expect(display).toContain("flex");
        expect(justifyContent).toBe("flex-start");
        expect(flexDirection).toBe("row");
    }));

    it('ul with left direction should be rendered with proper style', async(() => {
        let leftUlEl = fixture.debugElement.query(By.css("#leftUl"));
        let display = leftUlEl.nativeElement.style.display;
        let justifyContent = leftUlEl.nativeElement.style.justifyContent;
        let flexDirection = leftUlEl.nativeElement.style.flexDirection;

        expect(display).toContain("flex");
        expect(justifyContent).toBe("flex-start");
        expect(flexDirection).toBe("row-reverse");
    }));

    it('ul with down direction should be rendered with proper style', async(() => {
        let downUlEl = fixture.debugElement.query(By.css("#downUl"));
        let display = downUlEl.nativeElement.style.display;
        let justifyContent = downUlEl.nativeElement.style.justifyContent;
        let flexDirection = downUlEl.nativeElement.style.flexDirection;

        expect(display).toContain("flex");
        expect(justifyContent).toBe("flex-start");
        expect(flexDirection).toBe("column");
    }));

    it('ul with up direction should be rendered with proper style', async(() => {
        let upUlEl = fixture.debugElement.query(By.css("#upUl"));
        let display = upUlEl.nativeElement.style.display;
        let justifyContent = upUlEl.nativeElement.style.justifyContent;
        let flexDirection = upUlEl.nativeElement.style.flexDirection;

        expect(display).toContain("flex");
        expect(justifyContent).toBe("flex-end");
        expect(flexDirection).toBe("column-reverse");
    }));
});
