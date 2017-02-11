/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { TestBed, async,  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Ng2FloatBtnLableDirective } from './ng2-float-btn-label.directive';

@Component({
  template: `
    <label ng2-float-btn-label [isMini]="false" id="normalLabel">Some Text</label>
    <label ng2-float-btn-label [isMini]="true" id="miniLabel">Some Text</label>
  `
})
class TestComponent {}

describe('Ng2FloatBtnLableDirective', () => {
    let fixture;
    
    beforeEach(async(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, Ng2FloatBtnLableDirective]
        })
        .createComponent(TestComponent);
        fixture.detectChanges(); 

    }));

    it('Normal label should be rendered with proper style', async(() => {
        let normalLabelEl = fixture.debugElement.query(By.css("#normalLabel"));
        let fontFamily = normalLabelEl.nativeElement.style.fontFamily;
        let fontSize = normalLabelEl.nativeElement.style.fontSize;
        let alignSelf = normalLabelEl.nativeElement.style.alignSelf;

        expect(fontFamily).toContain("Roboto");
        expect(fontSize).toBe("0.9em");
        expect(alignSelf).toBe("center");
    }));

     it('Mini label should be rendered with proper style', async(() => {
        let miniLabelEl = fixture.debugElement.query(By.css("#miniLabel"));
        let fontFamily = miniLabelEl.nativeElement.style.fontFamily;
        let fontSize = miniLabelEl.nativeElement.style.fontSize;
        let alignSelf = miniLabelEl.nativeElement.style.alignSelf;

        expect(fontFamily).toContain("Roboto");
        expect(fontSize).toBe("0.7em");
        expect(alignSelf).toBe("center");
    }));
});
