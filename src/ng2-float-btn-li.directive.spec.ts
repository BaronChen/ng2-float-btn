/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { TestBed, async,  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Ng2FloatBtnLiDirective } from './ng2-float-btn-li.directive';

@Component({
  template: `
    <ul>
        <li ng2-float-btn-li id="testLi"></li>
    </ul>
  `
})
class TestComponent {}

describe('Ng2FloatBtnLiDirective', () => {
    let fixture;
    
    beforeEach(async(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, Ng2FloatBtnLiDirective]
        })
        .createComponent(TestComponent);
        fixture.detectChanges(); 

    }));

    it('li should be rendered with proper style', async(() => {
        let liEl = fixture.debugElement.query(By.css("#testLi"));
        let display = liEl.nativeElement.style.display;
        let justifyContent = liEl.nativeElement.style.justifyContent;
        let flexDirection = liEl.nativeElement.style.flexDirection;

        expect(display).toBe("flex");
        expect(justifyContent).toBe("flex-start");
        expect(flexDirection).toBe("column");
    }));

});
